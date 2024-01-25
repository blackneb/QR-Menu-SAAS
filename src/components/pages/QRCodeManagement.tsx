import React, { useRef } from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { QRCode } from 'antd';

const { Text } = Typography;

interface QRCodeDisplayProps {
  data: string; // QR code data
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ data }) => {
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const handleSave = () => {
    const canvas = document.createElement('canvas');
    const qrCodeImage = qrCodeRef.current?.getElementsByTagName('img')[0];

    if (qrCodeImage) {
      canvas.width = qrCodeImage.width;
      canvas.height = qrCodeImage.height;
      const context = canvas.getContext('2d');

      if (context) {
        context.drawImage(qrCodeImage, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'qrcode.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  return (
    <div className="qr-code-display" ref={qrCodeRef}>
      <Row className="space-y-4">
        <Col span={24} className="text-center">
          <Text strong>QR Code</Text>
        </Col>
        <Col span={24} className="flex justify-center align-center">
          <QRCode value={data} size={300} />
        </Col>
        <Col span={24} className="text-center">
          <Button type="primary" icon={<SaveOutlined />} onClick={handleSave} style={{ background: '#800020', borderColor: '#800020' }}>
            Save QR Code
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default QRCodeDisplay;
