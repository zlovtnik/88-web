// Core application interfaces and types

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  permissions: Permission[];
  isActive: boolean;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  ANALYST = 'analyst',
  VIEWER = 'viewer'
}

export enum Permission {
  READ_DASHBOARD = 'read_dashboard',
  READ_TAX_RETURNS = 'read_tax_returns',
  WRITE_TAX_RETURNS = 'write_tax_returns',
  READ_PAYMENTS = 'read_payments',
  WRITE_PAYMENTS = 'write_payments',
  READ_REPORTS = 'read_reports',
  WRITE_REPORTS = 'write_reports',
  READ_USERS = 'read_users',
  WRITE_USERS = 'write_users',
  READ_AUDIT = 'read_audit',
  READ_SETTINGS = 'read_settings',
  WRITE_SETTINGS = 'write_settings'
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  pagination?: PaginationInfo;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface DashboardMetrics {
  totalTaxReturns: number;
  pendingPayments: number;
  complianceScore: number;
  processingQueue: number;
  revenueCollected: number;
  auditAlerts: number;
  monthlyGrowth: number;
  efficiencyRate: number;
}

export interface TaxReturn {
  id: string;
  taxpayerId: string;
  taxYear: number;
  filingStatus: FilingStatus;
  totalIncome: number;
  totalDeductions: number;
  taxLiability: number;
  paymentStatus: PaymentStatus;
  processingStatus: ProcessingStatus;
  documents: Document[];
  createdAt: Date;
  updatedAt: Date;
}

export enum FilingStatus {
  DRAFT = 'draft',
  SUBMITTED = 'submitted',
  UNDER_REVIEW = 'under_review',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

export enum PaymentStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded'
}

export enum ProcessingStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  ERROR = 'error'
}

export interface Payment {
  id: string;
  taxReturnId: string;
  amount: number;
  paymentMethod: PaymentMethod;
  status: PaymentStatus;
  transactionId: string;
  processedAt: Date;
  metadata: PaymentMetadata;
}

export enum PaymentMethod {
  CREDIT_CARD = 'credit_card',
  BANK_TRANSFER = 'bank_transfer',
  CHECK = 'check',
  CASH = 'cash'
}

export interface PaymentMetadata {
  cardType?: string;
  lastFourDigits?: string;
  bankName?: string;
  accountNumber?: string;
  checkNumber?: string;
}

export interface Document {
  id: string;
  name: string;
  type: DocumentType;
  size: number;
  url: string;
  uploadedAt: Date;
}

export enum DocumentType {
  W2 = 'w2',
  W4 = 'w4',
  SCHEDULE_C = 'schedule_c',
  SCHEDULE_D = 'schedule_d',
  RECEIPT = 'receipt',
  OTHER = 'other'
}

export interface FileUpload {
  id: string;
  name: string;
  type: string;
  size: number;
  status: FileUploadStatus;
  progress: number;
  uploadedAt: Date;
  processedAt?: Date;
  error?: string;
}

export enum FileUploadStatus {
  UPLOADING = 'uploading',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  ERROR = 'error'
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resource: string;
  resourceId: string;
  details: any;
  ipAddress: string;
  userAgent: string;
  createdAt: Date;
}

export interface Report {
  id: string;
  name: string;
  type: ReportType;
  parameters: ReportParameters;
  status: ReportStatus;
  generatedAt?: Date;
  downloadUrl?: string;
}

export enum ReportType {
  TAX_SUMMARY = 'tax_summary',
  PAYMENT_REPORT = 'payment_report',
  COMPLIANCE_REPORT = 'compliance_report',
  AUDIT_REPORT = 'audit_report',
  CUSTOM = 'custom'
}

export enum ReportStatus {
  PENDING = 'pending',
  GENERATING = 'generating',
  COMPLETED = 'completed',
  ERROR = 'error'
}

export interface ReportParameters {
  startDate?: Date;
  endDate?: Date;
  taxYear?: number;
  status?: string;
  userId?: string;
  [key: string]: any;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
  fill?: boolean;
}

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  actionUrl?: string;
}

export enum NotificationType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error'
}

export interface AppSettings {
  theme: 'light' | 'dark';
  language: string;
  timezone: string;
  dateFormat: string;
  currency: string;
  notifications: NotificationSettings;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  dashboard: boolean;
} 