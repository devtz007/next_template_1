import { ReactElement } from 'react';

export interface GridTable1RPagePartRowItemsType {
  name: {
    statusType: 'pending';
    text: string;
  };
  type: {
    icon: ReactElement;
    text: string;
  };
  vulnerability: 'low' | 'medium' | 'high' | 'critical' | 'informational';
  assetGroup: string;
  lastUpdated: string;
}

export interface GridTable2PagePartRowItemsType {
  name: {
    text: string;
  };
  type: {
    icon: ReactElement;
    text: string;
  };

  assetGroup: string;
  lastUpdated: string;
}

export interface GridTable3PagePartRowItemsType {
  name: {
    text: string;
  };
  severity: {
    low: number;
    medium: number;
    high: number;
    critical: number;
    informational: number;
  };
  assets: string;
  lastScanned: string;
}

export interface GridTable4PagePartRowItemsType {
  name: {
    text: string;
  };
  severity: {
    low: number;
    medium: number;
    high: number;
    critical: number;
    informational: number;
  };
  assets: string;
  lastScanned: string;
}

export interface GridTable5PagePartRowItemsType {
  assetName: string;
  domainIp: string;
}

export interface Filter4RPagePartType {
  name: string;
  dropDownItems: {
    text: string;
    id: string;
  }[];
}

//StatusCards3RPagePart
export interface StatusCards3RPagePartTypes {
  total: number;
  label: string;
  left: string;
  top: string;
  size: string;
}
