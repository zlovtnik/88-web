import { User, UserRole, Permission, AuthState, ApiResponse, PaginationInfo, DashboardMetrics, TaxReturn, FilingStatus, PaymentStatus, ProcessingStatus, Payment, PaymentMethod, PaymentMetadata, Document, DocumentType, FileUpload, FileUploadStatus, AuditLog, Report, ReportType, ReportStatus, ReportParameters, ChartData, ChartDataset, Notification, NotificationType, AppSettings, NotificationSettings } from './index';

describe('Core Models', () => {
  it('should create a valid User object', () => {
    const user: User = {
      id: '1',
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User',
      role: UserRole.ADMIN,
      permissions: [Permission.READ_DASHBOARD],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    expect(user.email).toBe('test@example.com');
    expect(user.role).toBe(UserRole.ADMIN);
  });

  it('should create a valid AuthState', () => {
    const state: AuthState = {
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    };
    expect(state.isAuthenticated).toBeFalse();
  });

  it('should create a valid ApiResponse', () => {
    const response: ApiResponse<string> = {
      success: true,
      data: 'ok',
      message: 'done',
    };
    expect(response.success).toBeTrue();
    expect(response.data).toBe('ok');
  });

  it('should create a valid DashboardMetrics', () => {
    const metrics: DashboardMetrics = {
      totalTaxReturns: 10,
      pendingPayments: 2,
      complianceScore: 99,
      processingQueue: 1,
      revenueCollected: 10000,
      auditAlerts: 0,
      monthlyGrowth: 5,
      efficiencyRate: 98,
    };
    expect(metrics.totalTaxReturns).toBe(10);
  });

  it('should create a valid TaxReturn', () => {
    const taxReturn: TaxReturn = {
      id: 'tr1',
      taxpayerId: 'tp1',
      taxYear: 2024,
      filingStatus: FilingStatus.DRAFT,
      totalIncome: 100000,
      totalDeductions: 20000,
      taxLiability: 8000,
      paymentStatus: PaymentStatus.PENDING,
      processingStatus: ProcessingStatus.PENDING,
      documents: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    expect(taxReturn.taxYear).toBe(2024);
  });

  it('should create a valid Payment', () => {
    const payment: Payment = {
      id: 'p1',
      taxReturnId: 'tr1',
      amount: 500,
      paymentMethod: PaymentMethod.CREDIT_CARD,
      status: PaymentStatus.COMPLETED,
      transactionId: 'txn1',
      processedAt: new Date(),
      metadata: {},
    };
    expect(payment.amount).toBe(500);
  });

  it('should create a valid Document', () => {
    const doc: Document = {
      id: 'd1',
      name: 'W2',
      type: DocumentType.W2,
      size: 12345,
      url: 'http://example.com',
      uploadedAt: new Date(),
    };
    expect(doc.type).toBe(DocumentType.W2);
  });

  it('should create a valid FileUpload', () => {
    const upload: FileUpload = {
      id: 'f1',
      name: 'file.pdf',
      type: 'pdf',
      size: 1000,
      status: FileUploadStatus.UPLOADING,
      progress: 10,
      uploadedAt: new Date(),
    };
    expect(upload.status).toBe(FileUploadStatus.UPLOADING);
  });

  it('should create a valid AuditLog', () => {
    const log: AuditLog = {
      id: 'a1',
      userId: 'u1',
      action: 'login',
      resource: 'user',
      resourceId: 'u1',
      details: {},
      ipAddress: '127.0.0.1',
      userAgent: 'test',
      createdAt: new Date(),
    };
    expect(log.action).toBe('login');
  });

  it('should create a valid Report', () => {
    const report: Report = {
      id: 'r1',
      name: 'Tax Summary',
      type: ReportType.TAX_SUMMARY,
      parameters: {},
      status: ReportStatus.PENDING,
    };
    expect(report.type).toBe(ReportType.TAX_SUMMARY);
  });

  it('should create a valid Notification', () => {
    const notification: Notification = {
      id: 'n1',
      type: NotificationType.INFO,
      title: 'Info',
      message: 'Test',
      isRead: false,
      createdAt: new Date(),
    };
    expect(notification.type).toBe(NotificationType.INFO);
  });

  it('should create a valid AppSettings', () => {
    const settings: AppSettings = {
      theme: 'light',
      language: 'en',
      timezone: 'UTC',
      dateFormat: 'YYYY-MM-DD',
      currency: 'USD',
      notifications: {
        email: true,
        push: false,
        sms: false,
        dashboard: true,
      },
    };
    expect(settings.theme).toBe('light');
  });
});
