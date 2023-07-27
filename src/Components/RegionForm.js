import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Select, Card } from 'antd';

const { Option } = Select;

const RegionForm = () => {
  const dispatch = useDispatch();
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (value) => {
    setSelectedRegion(value);
  };

  const handleLoadButtonClick = () => {
    const regionData = {
      'United States': { latitude: 37.0902, longitude: -95.7129, zoom: 5 },
      'India': { latitude: 20.5937, longitude: 78.9629, zoom: 5 },
      'United Kingdom': { latitude: 55.3781, longitude: -3.4360, zoom: 6 },
    };

    const selectedRegionData = regionData[selectedRegion];
    if (selectedRegionData) {
      dispatch({ type: 'SET_SELECTED_REGION', payload: selectedRegionData });
    }
  };

  return (
    <Card style={{ padding: '16px', marginBottom: '16px' }}>
      <h3>Select Region:</h3>
      <Select style={{ width: '100%' }} value={selectedRegion} onChange={handleRegionChange}>
        <Option value="United States">United States</Option>
        <Option value="India">India</Option>
        <Option value="United Kingdom">United Kingdom</Option>
      </Select>
      <Button type="primary" style={{ marginTop: '16px' }} onClick={handleLoadButtonClick}>
        Load
      </Button>
    </Card>
  );
};

export default RegionForm;
