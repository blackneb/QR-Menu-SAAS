import React, { useState } from 'react';
import { Table, Button, Modal, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ColumnProps } from 'antd/lib/table';


interface MenuItem {
  id: number;
  menuName: string;
  category: string;
  restaurantId: number;
  price: number;
  image: string;
}

interface MenuTableProps {
  data: MenuItem[];
}

const MenuTable: React.FC<MenuTableProps> = ({ data }) => {
    const uniqueCategories = [...new Set(data.map((item) => item.category))];
  
    const [filteredData, setFilteredData] = useState<MenuItem[]>(data);
  
    const showModal = (title: string, text: string) => {
      Modal.info({
        title,
        content: (
          <div>
            <p>{text}</p>
          </div>
        ),
        onOk() {},
      });
    };
  
    const handleEdit = (record: MenuItem) => {
      // Implement your edit logic here
      console.log('Edit', record);
    };
  
    const handleDelete = (record: MenuItem) => {
      // Implement your delete logic here
      console.log('Delete', record);
    };
  
    const handleSearch = (confirm: any) => {
      confirm();
      setFilteredData(data); // Reset to the full data set
    };
  
    const handleReset = (clearFilters: any) => {
      clearFilters();
      setFilteredData(data);
    };

    const getColumnSearchProps = (dataIndex: string) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(confirm)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => handleSearch(confirm)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90, marginRight: 8, backgroundColor:"#800020", borderColor:"#800020" }}
            >
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </div>
        ),
        filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value: any, record: { [key: string]: any }) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible: boolean) => {
          if (visible) {
            setTimeout(() => {
                const searchInput = document.getElementById('search-input') as HTMLInputElement | null;
                if (searchInput) {
                  searchInput.select();
                }
              }, 100);
          }
        },
      });
      
  
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a: MenuItem, b: MenuItem) => a.id - b.id,
      },
      {
        title: 'Menu Name',
        dataIndex: 'menuName',
        key: 'menuName',
        sorter: (a: MenuItem, b: MenuItem) => a.menuName.localeCompare(b.menuName),
        ...getColumnSearchProps('menuName'),
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        sorter: (a: MenuItem, b: MenuItem) => a.category.localeCompare(b.category),
        filters: uniqueCategories.map((category) => ({ text: category, value: category })),
        onFilter: (value: string, record: MenuItem) => record.category === value,
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
          <div style={{ padding: 8 }}>
            <Select
              showSearch
              style={{ width: '100%' }}
              value={selectedKeys[0]}
              onChange={(value) => setSelectedKeys(value ? [value] : [])}
              onSearch={(value) => setSelectedKeys(value ? [value] : [])}
              filterOption={(input, option: any) => option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              {uniqueCategories.map((category) => (
                <Select.Option key={category} value={category}>
                  {category}
                </Select.Option>
              ))}
            </Select>
            <div style={{ marginTop: 8 }}>
              <Button
                type="primary"
                onClick={() => handleSearch(confirm)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: "100%", marginRight: '4%', backgroundColor: "#800020", borderColor: "#800020" }}
              >
                Search
              </Button>
              <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: '100%', marginTop: 8 }}>
                Reset
              </Button>
            </div>
          </div>
        ),
      },
      {
        title: 'Restaurant ID',
        dataIndex: 'restaurantId',
        key: 'restaurantId',
        sorter: (a: MenuItem, b: MenuItem) => a.restaurantId - b.restaurantId,
        ...getColumnSearchProps('restaurantId'),
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a: MenuItem, b: MenuItem) => a.price - b.price,
        ...getColumnSearchProps('price'),
      },
      {
        title: 'Preview',
        key: 'preview',
        render: (text: string) => (
          <Button type="primary" style={{ background: '#800020', borderColor: '#800020' }} onClick={() => showModal('Preview Text', text)}>
            Preview
          </Button>
        ),
      },
      {
        title: 'Edit',
        key: 'edit',
        render: (record: MenuItem) => (
          <Button type="default" style={{ background: 'green', borderColor: 'green', color: 'white' }} onClick={() => handleEdit(record)}>
            Edit
          </Button>
        ),
      },
      {
        title: 'Delete',
        key: 'delete',
        render: (record: MenuItem) => (
          <Button style={{ background: 'red', borderColor: 'red', color: 'white' }} onClick={() => handleDelete(record)}>
            Delete
          </Button>
        ),
      },
    ];
  
    return (
        <div>
        <Table
          dataSource={filteredData}
          columns={columns as ColumnProps<MenuItem>[]}
          pagination={{ pageSize: 10 }}
          rowKey={(record) => record.id.toString()}
        />
      </div>
    );
  };

  export default MenuTable;