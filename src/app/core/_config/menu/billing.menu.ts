export const billingMenuModule = {
  title: "Billing",
  root: true,
  alignment: "left",
  toggle: "click",
  translate: "MENU.BILLING.MODULE_NAME",
  page: "/billing",
  submenu: [
    {
      title: "Quick Links",
      page: "/quick-links",
      translate: "MENU.BILLING.QUICK_LINKS",
      submenu: [
        {
          title: "Customer Search",
          page: "/customer-search",
          translate: "MENU.BILLING.CUSTOMER_SEARCH",
        },
        {
          title: "Duplicate Bill Print",
          page: "/duplicate-bill-print",
          translate: "MENU.BILLING.DUPLICATE_BILL_PRINT",
        },
        {
          title: "Duplicate Final Bill Print",
          page: "/duplicate-final-bill-print",
          translate: "MENU.BILLING.DUPLICATE_FINAL_BILL_PRINT"
        },
        {
          title: "Customer MobileNo Update",
          page: "/customer-mobileno-update",
          translate: "MENU.BILLING.CUSTOMER_MOBILE_NUMBER_UPDATE"
        },
      ],
    },
    {
      title: "Billing",
      page: "/billing",
      translate: "MENU.BILLING.BILLING",
      submenu: [
        {
          title: "Bill Process",
          page: "/bill-process",
          translate: "MENU.BILLING.BILL_PROCESS"
        },
        {
          title: "Bill Preview",
          page: "/bill-preview",
          translate: "MENU.BILLING.BILL_PREVIEW",
          submenu: [
            {
              title: "Group Bill Print",
              page: "/group-bill-preview",
              translate: "MENU.BILLING.GROUP_BILL_PREVIEW"
            },
            {
              title: "Single Bill Print",
              page: "/single-bill-preview",
              translate: "MENU.BILLING.SINGLE_BILL_PREVIEW"
            },
            {
              title: "Duplicate Bill Print",
              page: "/duplicate-bill-preview",
              translate: "MENU.BILLING.DUPLICATE_BILL_PREVIEW"
            },
            {
              title: "Duplicate Final Bill Print",
              page: "/final-duplicate-bill-preview",
              translate: "MENU.BILLING.FINAL_DUPLICTE_BILL_PREVIEW"
            },
          ],
        },
        {
          title: "Bill",
          page: "/bill",
          translate: "MENU.BILLING.BILL",
          submenu: [
            {
              title: "Adjustments",
              page: "/adjustments",
              translate: "MENU.BILLING.ADJUSTMENTS"
            },
            {
              title: "Final Bill Requests",
              page: "/final-bill-requests",
              translate: "MENU.BILLING.FINAL_BILL_REQUEST"
            },
          ],
        },
        {
          title: "SMS Billing",
          page: "/sms-billing",
          translate: "MENU.BILLING.SMS_BILLING",
          submenu: [
            {
              title: "Single MobileNo Binding",
              page: "/single-mobileno-binding",
              translate: "MENU.BILLING.SINGLE_MOBILENO_BINDING"
            },
            {
              title: "Bulk MobileNo Upload",
              page: "/bulk-mobileno-upload",
              translate: "MENU.BILLING.BULK_MOBILENO_UPLOAD"
            },
            {
              title: "Send SMS",
              page: "/send-sms",
              translate: "MENU.BILLING.SEND_SMS"
            },
            {
              title: "Send Delivery Report",
              page: "/send-delivery-report",
              translate: "MENU.BILLING.SEND_DELIVERY_REPORT"
            },
          ],
        },
      ],
    },
    {
      title: "Other Activites",
      page: "/other-activities",
      translate: "MENU.BILLING.OTHER_ACTIVITIES",
      submenu: [
        {
          title: "Daily Bill Print",
          page: "/daily-bill-print",
          translate: "MENU.BILLING.DAILY_BILL_PRINT"
        },
        {
          title: "CAAD",
          page: "/caad",
          translate: "CAAD"
        },
        {
          title: "CRMD",
          page: "/crmd",
          translate: "CRMD"
        },
        {
          title: "Approvals for Customer Changes",
          page: "/approvals-for-customer-changes",
          translate: "MENU.BILLING.APPROVALS_FOR_CUSTOMER_CHANGES"
        },
        {
          title: "Offline Adjustments",
          page: "/offline-adjustments",
          translate: "MENU.BILLING.OFFLINE_ADJUSTMENTS"
        },
        {
          title: "Update Changes",
          page: "/update-changes",
          translate: "MENU.BILLING.UPDATE_CHANGES"
        },
        {
          title: "Primary Update",
          page: "/primary-update",
          translate: "MENU.BILLING.PRIMARY_CHANGES"
        },
        {
          title: "Bill Stopped Services",
          page: "/bill-stopped-services",
          translate: "MENU.BILLING.BILL_STOPPED_SERVICES"
        },
        {
          title: "Bill Stopped Services Approval",
          page: "/bill-stopped-services-approval",
          translate: "MENU.BILLING.BILL_STOPPED_SERVICES_APPROVAL"
        },
        {
          title: "Bill Stop to Live",
          page: "/bill-stop-to-live",
          translate: "MENU.BILLING.BILL_STOPED_LIVE"
        },
        {
          title: "!Bill Schedule!",
          page: "/bill-schedule",
          translate: "MENU.BILLING.BILL_SCHEDULE"
        },
      ],
    },
    {
      title: "Reports",
      page: "/reports",
      translate: "MENU.BILLING.REPORTS"
    },
  ],
};
