# 🏛️ Tax Data Warehouse - Angular Frontend

[![Angular](https://img.shields.io/badge/Angular-20.0.0-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](https://github.com/your-org/fiscal-data-warehouse)

A modern, responsive Angular frontend application for managing tax data, returns, payments, and compliance analytics. Built with Angular 20, TypeScript, and Angular Material for a professional government-grade interface.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Angular CLI** (v20.0.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/fiscal-data-warehouse.git
   cd fiscal-data-warehouse
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/` to view the application.

## 📋 Features

### 🔐 Authentication & Security
- JWT-based authentication
- Role-based access control (RBAC)
- Session management
- Route guards for protected routes
- Secure API communication

### 📊 Dashboard & Analytics
- Real-time metrics and KPIs
- Interactive charts and graphs
- Tax processing statistics
- Payment processing overview
- Compliance monitoring
- Export functionality (PDF, CSV, Excel)

### 📝 Tax Return Management
- Tax return listing with advanced filters
- Detailed tax return views
- Tax return creation wizard
- Document upload and management
- Tax calculation preview
- Validation and error handling

### 💳 Payment Processing
- Payment dashboard
- Multiple payment method support
- Payment history and tracking
- Payment status monitoring
- Refund processing interface
- Transaction management

### 📁 File Processing
- Multi-format file upload (CSV, XML, JSON)
- Batch processing queue
- File validation preview
- Processing status monitoring
- Error handling and retry mechanisms

### 🔍 Compliance & Audit
- Compliance monitoring dashboard
- Audit trail viewer
- Fraud detection alerts
- Compliance reporting
- Regulatory requirement tracking

### 👥 User Management
- User administration panel
- Role and permission management
- User activity monitoring
- Profile management
- Team collaboration features

## 🛠️ Technology Stack

### Frontend Framework
- **Angular 20** - Latest version with standalone components
- **TypeScript** - Type-safe development
- **Angular Material** - Professional UI components
- **NgRx** - State management
- **RxJS** - Reactive programming

### UI/UX Libraries
- **Chart.js** - Data visualization
- **Angular CDK** - Advanced components
- **Angular Flex Layout** - Responsive design
- **Angular PWA** - Progressive web app capabilities

### Development Tools
- **Angular CLI** - Project scaffolding and build tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Jest** - Unit testing
- **Cypress** - End-to-end testing

### Build & Deployment
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline
- **Nginx** - Web server
- **PM2** - Process management

## 📁 Project Structure

```
src/
├── app/
│   ├── auth/                 # Authentication module
│   │   ├── components/       # Login, register, etc.
│   │   ├── models/          # Auth interfaces
│   │   └── services/        # Auth services
│   ├── core/                # Core functionality
│   │   ├── constants/       # App constants
│   │   ├── guards/          # Route guards
│   │   ├── interceptors/    # HTTP interceptors
│   │   ├── models/          # Core interfaces
│   │   └── services/        # Core services
│   ├── features/            # Feature modules
│   │   ├── analytics/       # Analytics dashboard
│   │   ├── audit/           # Audit and compliance
│   │   ├── budget/          # Budget management
│   │   ├── dashboard/       # Main dashboard
│   │   ├── data-management/ # Data management
│   │   ├── financial-records/ # Financial records
│   │   ├── reports/         # Reporting
│   │   ├── settings/        # System settings
│   │   └── user-management/ # User management
│   ├── layout/              # Layout components
│   │   └── components/      # Header, sidebar, footer
│   └── shared/              # Shared components
│       ├── components/      # Reusable components
│       ├── directives/      # Custom directives
│       ├── pipes/           # Custom pipes
│       └── utils/           # Utility functions
├── assets/                  # Static assets
├── environments/            # Environment configurations
└── styles/                  # Global styles
```

## 🚀 Development Commands

### Development
```bash
# Start development server
npm start

# Build for development
npm run build:dev

# Watch mode
npm run watch
```

### Testing
```bash
# Run unit tests
npm test

# Run unit tests with coverage
npm run test:coverage

# Run end-to-end tests
npm run e2e

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

### Building
```bash
# Build for production
npm run build

# Build for staging
npm run build:staging

# Analyze bundle size
npm run analyze
```

### Docker
```bash
# Build Docker image
docker build -t fiscal-data-warehouse .

# Run Docker container
docker run -p 4200:80 fiscal-data-warehouse
```

## 🔧 Configuration

### Environment Variables

Create environment files in `src/environments/`:

```typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'Tax Data Warehouse',
  version: '1.0.0'
};
```

### Angular Configuration

The application uses Angular 20's standalone components and modern build system. Key configurations:

- **Standalone Components**: All components are standalone for better tree-shaking
- **Lazy Loading**: Feature modules are lazy-loaded for optimal performance
- **PWA Support**: Progressive web app capabilities enabled
- **TypeScript Strict Mode**: Enabled for better type safety

## 📊 Performance Metrics

### Target Performance
- **Page Load Time**: < 2 seconds
- **Time to Interactive**: < 3 seconds
- **Lighthouse Score**: > 90
- **Bundle Size**: < 2MB

### Monitoring
- Real-time performance monitoring
- Error tracking and reporting
- User analytics and behavior tracking
- Accessibility compliance monitoring

## 🔒 Security Features

### Authentication
- JWT token-based authentication
- Secure token storage
- Automatic token refresh
- Session timeout handling

### Authorization
- Role-based access control (RBAC)
- Permission-based component rendering
- Route-level security guards
- API endpoint protection

### Data Protection
- HTTPS enforcement
- XSS protection
- CSRF protection
- Input validation and sanitization

## 🧪 Testing Strategy

### Unit Testing
- Component testing with Angular Testing Utilities
- Service testing with dependency injection
- Pipe and directive testing
- Coverage target: > 80%

### Integration Testing
- API integration testing
- State management testing
- Router testing
- HTTP interceptor testing

### End-to-End Testing
- User workflow testing
- Cross-browser compatibility
- Performance testing
- Accessibility testing

## 🚀 Deployment

### Development
```bash
npm start
```

### Staging
```bash
npm run build:staging
# Deploy to staging environment
```

### Production
```bash
npm run build
# Deploy to production environment
```

### Docker Deployment
```bash
# Build production image
docker build -t fiscal-data-warehouse:prod .

# Run in production
docker run -d -p 80:80 fiscal-data-warehouse:prod
```

## 📚 Documentation

- [Development Specification](./docs/DEVELOPMENT_SPEC.md) - Comprehensive development plan
- [API Documentation](./docs/api/) - API integration guide
- [Component Library](./docs/components/) - Component documentation
- [User Guide](./docs/user-guide/) - End-user documentation
- [Developer Guide](./docs/developer/) - Developer onboarding

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow Angular style guide
- Write unit tests for new features
- Update documentation as needed
- Ensure accessibility compliance
- Follow security best practices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs/](./docs/)
- **Issues**: [GitHub Issues](https://github.com/your-org/fiscal-data-warehouse/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/fiscal-data-warehouse/discussions)
- **Email**: support@fiscaldatawarehouse.com

## 🏆 Acknowledgments

- Angular team for the amazing framework
- Angular Material for the UI components
- Chart.js for data visualization
- All contributors and maintainers

---

**Built with ❤️ for government efficiency and transparency**

*Last updated: July 6, 2025*
