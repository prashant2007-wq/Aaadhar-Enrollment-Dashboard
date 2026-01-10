# Aadhaar Analytics Platform - Database Guide

## Overview
This platform uses a client-side database system built with TypeScript and localStorage for demo purposes. The database is fully functional and can be easily migrated to a production database like Supabase or PostgreSQL.

## Accessing the Database

### 1. Through the UI (Recommended for Users)
- **Login** to the platform using demo credentials or create a new account
- Navigate to the **"Database Management"** tab in the top navigation
- Here you can:
  - View all enrolment records
  - Search and filter records
  - Add new records
  - Edit existing records
  - Delete records
  - Export data as JSON

### 2. Demo Login Credentials
Use these credentials to access the platform:

**Admin Account:**
- Email: `admin@aadhaar.gov.in`
- Password: `admin123`

**Operator Account:**
- Email: `operator@aadhaar.gov.in`
- Password: `operator123`

**Analyst Account:**
- Email: `analyst@aadhaar.gov.in`
- Password: `analyst123`

### 3. Browser Console Access (For Developers)
Open your browser's developer console and use these commands:

```javascript
// Import the database
import { database } from './lib/database.ts';

// Get all enrolment records
const records = database.getAllEnrolmentRecords();
console.log(records);

// Get a specific record by ID
const record = database.getEnrolmentRecordById('ENR000001');
console.log(record);

// Add a new record
const newRecord = database.addEnrolmentRecord({
  aadhaarNumber: 'XXXX-XXXX-1234',
  name: 'John Doe',
  age: 35,
  gender: 'Male',
  district: 'Mumbai',
  state: 'Maharashtra',
  centerName: 'Mumbai Central',
  enrolmentDate: new Date().toISOString(),
  status: 'Completed',
  processingTime: 15
});

// Update a record
database.updateEnrolmentRecord('ENR000001', {
  status: 'Completed',
  processingTime: 12
});

// Delete a record
database.deleteEnrolmentRecord('ENR000001');

// Get statistics
console.log('Total Enrolments:', database.getTotalEnrolments());
console.log('Success Rate:', database.getSuccessRate());
console.log('Avg Processing Time:', database.getAverageProcessingTime());

// Get enrolments by district
const mumbaiRecords = database.getEnrolmentsByDistrict('Mumbai');

// Get enrolments by date range
const recentRecords = database.getEnrolmentsByDateRange('2025-01-01', '2025-12-31');

// Get all centers
const centers = database.getAllCenters();

// Get all campaigns
const campaigns = database.getAllCampaigns();

// Get all mobile units
const mobileUnits = database.getAllMobileUnits();
```

### 4. Accessing LocalStorage Directly
The database is stored in your browser's localStorage. You can access it:

1. Open browser DevTools (F12)
2. Go to **Application** > **Local Storage** > Select your domain
3. Look for these keys:
   - `aadhaar_database` - All database records
   - `aadhaar_user` - Current user session
   - `aadhaar_users` - Registered users

```javascript
// View the entire database
const db = JSON.parse(localStorage.getItem('aadhaar_database'));
console.log(db);

// Export database to file
const dataStr = JSON.stringify(db, null, 2);
const dataBlob = new Blob([dataStr], { type: 'application/json' });
const url = URL.createObjectURL(dataBlob);
const link = document.createElement('a');
link.href = url;
link.download = 'aadhaar-database-export.json';
link.click();
```

## Database Schema

### Enrolment Records
```typescript
interface EnrolmentRecord {
  id: string;                    // Unique ID (e.g., "ENR000001")
  aadhaarNumber: string;         // Masked (e.g., "XXXX-XXXX-1234")
  name: string;                  // Full name
  age: number;                   // Age in years
  gender: 'Male' | 'Female' | 'Other';
  district: string;              // District name
  state: string;                 // State name
  centerName: string;            // Enrolment center name
  enrolmentDate: string;         // ISO date string
  updateType?: string;           // Type of update if applicable
  status: 'Completed' | 'Pending' | 'Rejected';
  processingTime: number;        // Time in minutes
}
```

### Enrolment Centers
```typescript
interface EnrolmentCenter {
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
```

### Campaigns
```typescript
interface Campaign {
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
  roi: number;
}
```

### Mobile Units
```typescript
interface MobileUnit {
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
```

## Data Management Features

### 1. Search & Filter
- Search by name, Aadhaar number, or district
- Filter by status (Completed, Pending, Rejected)
- Real-time filtering as you type

### 2. Export Data
- Export all records as JSON
- Download includes complete database structure
- Can be imported into other systems

### 3. Add Records
- Click "Add Record" button in Database Management tab
- Fill in the form with required details
- Record is automatically assigned a unique ID

### 4. Edit Records
- Click the edit icon (pencil) next to any record
- Modify any field except the ID
- Changes are saved immediately

### 5. Delete Records
- Click the delete icon (trash) next to any record
- Confirmation prompt prevents accidental deletion
- Permanent deletion from the database

## Database Statistics Available

The platform provides real-time statistics:
- Total number of records
- Completed enrolments
- Pending enrolments
- Rejected enrolments
- Average processing time
- Success rate percentage
- Records by district
- Records by date range
- Center performance metrics

## Backup & Recovery

### Creating a Backup
1. Go to Database Management tab
2. Click "Export Data" button
3. Save the JSON file to your computer

### Restoring from Backup
```javascript
// In browser console
const backupData = {/* paste your backup JSON here */};
localStorage.setItem('aadhaar_database', JSON.stringify(backupData));
location.reload(); // Refresh the page
```

### Clearing All Data
```javascript
// WARNING: This will delete all data
localStorage.removeItem('aadhaar_database');
localStorage.removeItem('aadhaar_users');
localStorage.removeItem('aadhaar_user');
location.reload();
```

## Migration to Production Database

The current structure is designed to easily migrate to:

### Supabase (PostgreSQL)
```sql
-- Create tables
CREATE TABLE enrolment_records (
  id TEXT PRIMARY KEY,
  aadhaar_number TEXT NOT NULL,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  gender TEXT CHECK (gender IN ('Male', 'Female', 'Other')),
  district TEXT NOT NULL,
  state TEXT NOT NULL,
  center_name TEXT NOT NULL,
  enrolment_date TIMESTAMP NOT NULL,
  update_type TEXT,
  status TEXT CHECK (status IN ('Completed', 'Pending', 'Rejected')),
  processing_time INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE enrolment_centers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  district TEXT NOT NULL,
  state TEXT NOT NULL,
  type TEXT CHECK (type IN ('Urban', 'Semi-Urban', 'Rural')),
  capacity INTEGER NOT NULL,
  staff_count INTEGER NOT NULL,
  equipment_count INTEGER NOT NULL,
  operational_since DATE NOT NULL,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8)
);

-- Add indexes for performance
CREATE INDEX idx_district ON enrolment_records(district);
CREATE INDEX idx_status ON enrolment_records(status);
CREATE INDEX idx_enrolment_date ON enrolment_records(enrolment_date);
```

### MongoDB
```javascript
// Define schemas
const enrolmentSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  aadhaarNumber: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  district: { type: String, required: true },
  state: { type: String, required: true },
  centerName: { type: String, required: true },
  enrolmentDate: { type: Date, required: true },
  status: { type: String, enum: ['Completed', 'Pending', 'Rejected'] },
  processingTime: { type: Number, required: true }
});
```

## Security Considerations

⚠️ **Important Notes:**
- Current implementation uses client-side storage (not secure for production)
- Aadhaar numbers are masked but not encrypted
- No authentication on database operations (only UI access control)
- For production:
  - Use server-side database (Supabase, PostgreSQL, etc.)
  - Implement proper encryption for PII
  - Add row-level security policies
  - Implement audit logging
  - Add data retention policies
  - Comply with UIDAI guidelines

## Troubleshooting

### Data Not Showing Up
```javascript
// Check if database is initialized
const db = localStorage.getItem('aadhaar_database');
if (!db) {
  console.log('Database not initialized');
  // Reload the page to initialize
  location.reload();
}
```

### Reset to Initial State
```javascript
// Clear all data and reinitialize
localStorage.removeItem('aadhaar_database');
location.reload();
// The system will automatically create sample data
```

### Check Database Size
```javascript
const db = localStorage.getItem('aadhaar_database');
const sizeInKB = (db.length * 2) / 1024; // Approximate size
console.log(`Database size: ${sizeInKB.toFixed(2)} KB`);
```

## Support

For issues or questions:
1. Check the browser console for error messages
2. Verify localStorage is enabled in your browser
3. Try clearing cache and reloading
4. Export your data before making major changes

---

**Note:** This is a demo implementation for the Social Innovation Hackathon. For production deployment, integrate with a secure, scalable database solution like Supabase or PostgreSQL with proper encryption and access controls.
