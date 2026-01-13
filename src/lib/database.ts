
export interface EnrolmentRecord {
  id: string;
  aadhaarNumber: string; // Masked for privacy
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  district: string;
  state: string;
  centerName: string;
  enrolmentDate: string;
  updateType?: 'Biometric' | 'Address' | 'Mobile/Email' | 'Demographic' | 'Photo';
  status: 'Completed' | 'Pending' | 'Rejected';
  processingTime: number; // in minutes
}

export interface EnrolmentCenter {
  id: string;
  name: string;
  district: string;
  state: string;
  type: 'Urban' | 'Semi-Urban' | 'Rural';
  capacity: number;
  staffCount: number;
  equipmentCount: number;
  operationalSince: string;
  latitude: number;
  longitude: number;
}

export interface PerformanceMetric {
  id: string;
  centerId: string;
  date: string;
  enrolmentsProcessed: number;
  avgProcessingTime: number;
  errorRate: number;
  successRate: number;
  biometricIssues: number;
  documentIssues: number;
  systemErrors: number;
}

export interface Campaign {
  id: string;
  title: string;
  targetDemographic: string;
  targetPopulation: number;
  startDate: string;
  endDate: string;
  status: 'Planning' | 'Active' | 'Completed' | 'On Hold';
  budget: number;
  channelsUsed: string[];
  peopleReached: number;
  enrolmentsGenerated: number;
  roi: number; // Return on Investment percentage
}

export interface MobileUnit {
  id: string;
  unitName: string;
  currentLocation: string;
  district: string;
  state: string;
  scheduleStartDate: string;
  scheduleEndDate: string;
  status: 'Active' | 'Scheduled' | 'Maintenance' | 'Inactive';
  targetEnrolments: number;
  actualEnrolments: number;
  latitude: number;
  longitude: number;
}

export interface Prediction {
  id: string;
  predictionType: 'Demand' | 'Anomaly' | 'Resource' | 'Fraud';
  targetDate: string;
  district?: string;
  centerId?: string;
  predictedValue: number;
  confidence: number; // percentage
  actualValue?: number;
  accuracy?: number;
  createdAt: string;
}

// Database class for managing data
class Database {
  private enrolmentRecords: EnrolmentRecord[] = [];
  private centers: EnrolmentCenter[] = [];
  private performanceMetrics: PerformanceMetric[] = [];
  private campaigns: Campaign[] = [];
  private mobileUnits: MobileUnit[] = [];
  private predictions: Prediction[] = [];

  constructor() {
    this.initializeMockData();
  }

  private initializeMockData() {
    // Initialize with mock data
    this.loadFromLocalStorage();
    
    // If no data exists, create initial mock data
    if (this.enrolmentRecords.length === 0) {
      this.createInitialData();
      this.saveToLocalStorage();
    }
  }

  private loadFromLocalStorage() {
    try {
      const stored = localStorage.getItem('aadhaar_database');
      if (stored) {
        const data = JSON.parse(stored);
        this.enrolmentRecords = data.enrolmentRecords || [];
        this.centers = data.centers || [];
        this.performanceMetrics = data.performanceMetrics || [];
        this.campaigns = data.campaigns || [];
        this.mobileUnits = data.mobileUnits || [];
        this.predictions = data.predictions || [];
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
    }
  }

  private saveToLocalStorage() {
    try {
      const data = {
        enrolmentRecords: this.enrolmentRecords,
        centers: this.centers,
        performanceMetrics: this.performanceMetrics,
        campaigns: this.campaigns,
        mobileUnits: this.mobileUnits,
        predictions: this.predictions,
      };
      localStorage.setItem('aadhaar_database', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  private createInitialData() {
    // Create Enrolment Centers
    this.centers = [
      {
        id: 'CTR001',
        name: 'Mumbai Central',
        district: 'Mumbai',
        state: 'Maharashtra',
        type: 'Urban',
        capacity: 10000,
        staffCount: 25,
        equipmentCount: 15,
        operationalSince: '2020-01-15',
        latitude: 19.0760,
        longitude: 72.8777,
      },
      {
        id: 'CTR002',
        name: 'Delhi Hub',
        district: 'Delhi NCR',
        state: 'Delhi',
        type: 'Urban',
        capacity: 9000,
        staffCount: 22,
        equipmentCount: 14,
        operationalSince: '2020-03-10',
        latitude: 28.6139,
        longitude: 77.2090,
      },
      {
        id: 'CTR003',
        name: 'Rural Unit A',
        district: 'Rural UP',
        state: 'Uttar Pradesh',
        type: 'Rural',
        capacity: 8000,
        staffCount: 12,
        equipmentCount: 8,
        operationalSince: '2021-06-20',
        latitude: 26.8467,
        longitude: 80.9462,
      },
    ];

    // Create Sample Enrolment Records (100 records)
    const names = ['Rahul Sharma', 'Priya Patel', 'Amit Kumar', 'Sneha Singh', 'Rajesh Gupta', 'Anjali Mehta', 'Vikram Reddy', 'Kavita Nair'];
    const districts = ['Mumbai', 'Delhi NCR', 'Bangalore', 'Kolkata', 'Chennai', 'Rural UP', 'Rural Bihar'];
    const states = ['Maharashtra', 'Delhi', 'Karnataka', 'West Bengal', 'Tamil Nadu', 'Uttar Pradesh', 'Bihar'];
    const genders: ('Male' | 'Female' | 'Other')[] = ['Male', 'Female', 'Other'];
    const statuses: ('Completed' | 'Pending' | 'Rejected')[] = ['Completed', 'Completed', 'Completed', 'Completed', 'Pending', 'Rejected'];
    
    for (let i = 0; i < 100; i++) {
      const randomDate = new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
      this.enrolmentRecords.push({
        id: `ENR${String(i + 1).padStart(6, '0')}`,
        aadhaarNumber: `XXXX-XXXX-${Math.floor(1000 + Math.random() * 9000)}`,
        name: names[Math.floor(Math.random() * names.length)],
        age: Math.floor(Math.random() * 70) + 10,
        gender: genders[Math.floor(Math.random() * genders.length)],
        district: districts[Math.floor(Math.random() * districts.length)],
        state: states[Math.floor(Math.random() * states.length)],
        centerName: this.centers[Math.floor(Math.random() * this.centers.length)].name,
        enrolmentDate: randomDate.toISOString(),
        status: statuses[Math.floor(Math.random() * statuses.length)],
        processingTime: Math.floor(Math.random() * 20) + 5,
      });
    }

    // Create Campaigns
    this.campaigns = [
      {
        id: 'CMP001',
        title: 'Rural Elderly Awareness Drive',
        targetDemographic: 'Age 60+ in Rural Areas',
        targetPopulation: 62000,
        startDate: '2026-01-15',
        endDate: '2026-03-15',
        status: 'Active',
        budget: 1500000,
        channelsUsed: ['Home Visits', 'Community Centers', 'Local Radio'],
        peopleReached: 21080,
        enrolmentsGenerated: 8432,
        roi: 156,
      },
      {
        id: 'CMP002',
        title: 'Women Empowerment Initiative',
        targetDemographic: 'Rural Women (18-45)',
        targetPopulation: 89000,
        startDate: '2025-12-01',
        endDate: '2026-02-28',
        status: 'Active',
        budget: 2200000,
        channelsUsed: ['Female Staff', 'SHG Meetings', 'Mobile Units'],
        peopleReached: 59630,
        enrolmentsGenerated: 34255,
        roi: 187,
      },
    ];

    // Create Mobile Units
    this.mobileUnits = [
      {
        id: 'MU001',
        unitName: 'Mobile Unit 1',
        currentLocation: 'Rural UP - District A',
        district: 'Rural UP',
        state: 'Uttar Pradesh',
        scheduleStartDate: '2026-02-01',
        scheduleEndDate: '2026-02-15',
        status: 'Scheduled',
        targetEnrolments: 2500,
        actualEnrolments: 0,
        latitude: 26.8467,
        longitude: 80.9462,
      },
      {
        id: 'MU002',
        unitName: 'Mobile Unit 4',
        currentLocation: 'Kolkata Outskirts',
        district: 'Kolkata',
        state: 'West Bengal',
        scheduleStartDate: '2026-02-05',
        scheduleEndDate: '2026-02-12',
        status: 'Active',
        targetEnrolments: 1800,
        actualEnrolments: 945,
        latitude: 22.5726,
        longitude: 88.3639,
      },
    ];

    // Create Predictions
    this.predictions = [
      {
        id: 'PRD001',
        predictionType: 'Demand',
        targetDate: '2026-03-01',
        district: 'All',
        predictedValue: 142000,
        confidence: 88,
        createdAt: '2026-01-07',
      },
      {
        id: 'PRD002',
        predictionType: 'Demand',
        targetDate: '2026-04-01',
        district: 'All',
        predictedValue: 175000,
        confidence: 85,
        createdAt: '2026-01-07',
      },
    ];
  }

  // CRUD Operations for Enrolment Records
  getAllEnrolmentRecords(): EnrolmentRecord[] {
    return this.enrolmentRecords;
  }

  getEnrolmentRecordById(id: string): EnrolmentRecord | undefined {
    return this.enrolmentRecords.find(record => record.id === id);
  }

  addEnrolmentRecord(record: Omit<EnrolmentRecord, 'id'>): EnrolmentRecord {
    const newRecord: EnrolmentRecord = {
      ...record,
      id: `ENR${String(this.enrolmentRecords.length + 1).padStart(6, '0')}`,
    };
    this.enrolmentRecords.push(newRecord);
    this.saveToLocalStorage();
    return newRecord;
  }

  updateEnrolmentRecord(id: string, updates: Partial<EnrolmentRecord>): EnrolmentRecord | null {
    const index = this.enrolmentRecords.findIndex(record => record.id === id);
    if (index === -1) return null;
    
    this.enrolmentRecords[index] = { ...this.enrolmentRecords[index], ...updates };
    this.saveToLocalStorage();
    return this.enrolmentRecords[index];
  }

  deleteEnrolmentRecord(id: string): boolean {
    const initialLength = this.enrolmentRecords.length;
    this.enrolmentRecords = this.enrolmentRecords.filter(record => record.id !== id);
    if (this.enrolmentRecords.length < initialLength) {
      this.saveToLocalStorage();
      return true;
    }
    return false;
  }

  // Centers
  getAllCenters(): EnrolmentCenter[] {
    return this.centers;
  }

  getCenterById(id: string): EnrolmentCenter | undefined {
    return this.centers.find(center => center.id === id);
  }

  // Campaigns
  getAllCampaigns(): Campaign[] {
    return this.campaigns;
  }

  addCampaign(campaign: Omit<Campaign, 'id'>): Campaign {
    const newCampaign: Campaign = {
      ...campaign,
      id: `CMP${String(this.campaigns.length + 1).padStart(3, '0')}`,
    };
    this.campaigns.push(newCampaign);
    this.saveToLocalStorage();
    return newCampaign;
  }

  // Mobile Units
  getAllMobileUnits(): MobileUnit[] {
    return this.mobileUnits;
  }

  addMobileUnit(unit: Omit<MobileUnit, 'id'>): MobileUnit {
    const newUnit: MobileUnit = {
      ...unit,
      id: `MU${String(this.mobileUnits.length + 1).padStart(3, '0')}`,
    };
    this.mobileUnits.push(newUnit);
    this.saveToLocalStorage();
    return newUnit;
  }

  // Predictions
  getAllPredictions(): Prediction[] {
    return this.predictions;
  }

  addPrediction(prediction: Omit<Prediction, 'id'>): Prediction {
    const newPrediction: Prediction = {
      ...prediction,
      id: `PRD${String(this.predictions.length + 1).padStart(3, '0')}`,
    };
    this.predictions.push(newPrediction);
    this.saveToLocalStorage();
    return newPrediction;
  }

  // Analytics queries
  getEnrolmentsByDistrict(district: string): EnrolmentRecord[] {
    return this.enrolmentRecords.filter(record => record.district === district);
  }

  getEnrolmentsByDateRange(startDate: string, endDate: string): EnrolmentRecord[] {
    return this.enrolmentRecords.filter(record => {
      const recordDate = new Date(record.enrolmentDate);
      return recordDate >= new Date(startDate) && recordDate <= new Date(endDate);
    });
  }

  getEnrolmentsByStatus(status: 'Completed' | 'Pending' | 'Rejected'): EnrolmentRecord[] {
    return this.enrolmentRecords.filter(record => record.status === status);
  }

  // Statistics
  getTotalEnrolments(): number {
    return this.enrolmentRecords.length;
  }

  getSuccessRate(): number {
    const completed = this.enrolmentRecords.filter(r => r.status === 'Completed').length;
    return (completed / this.enrolmentRecords.length) * 100;
  }

  getAverageProcessingTime(): number {
    const total = this.enrolmentRecords.reduce((sum, record) => sum + record.processingTime, 0);
    return total / this.enrolmentRecords.length;
  }
}

// Export singleton instance
export const database = new Database();
