export const customerServiceMenuModule = {
    title: 'CUSTOMER SERVICE',
    root: true,
    alignment: 'left',
    toggle: 'click',
    translate: 'MENU.CUSTOMER_SERVICE.MODULE_NAME',
    page: '/customer-service',
    submenu: [
        {
            title: 'Customer Service',
            page: '',
            translate: "MENU.CUSTOMER_SERVICE.CUSTOMER_SERVICE",
            submenu: [
                {
                    title: 'Request Complaint',
                    page: '/complaints/list-complaint',
                    translate: "MENU.CUSTOMER_SERVICE.REQUEST_COMPLAINT"
                },
                {
                    title: 'Query Service',
                    page: '/query-service',
                    translate: "MENU.CUSTOMER_SERVICE.QUERY_SERVICE",

                    submenu: [
                        {
                            title: 'Dispatch List',
                            page: '/dispatch-list',
                            translate: "MENU.CUSTOMER_SERVICE.DISPATCH_LIST"
                        },
                        {
                            title: 'Rejected Complaints',
                            page: '/rejected-complaints-list',
                            translate: "MENU.CUSTOMER_SERVICE.REJECTED_COMPLAINTS"
                        },
                        {
                            title: 'Ractified Queries',
                            page: '/ractified-queries-list',
                            translate: "MENU.CUSTOMER_SERVICE.RECTIFIED_QUERIES"
                        },
                        {
                            title: 'Pending Reg',
                            page: '/pending-reg-list',
                            translate: "MENU.CUSTOMER_SERVICE.PENDING_REG"
                        },
                        {
                            title: 'Re-Opened Complaints',
                            page: '/re-opened-complaints-list',
                            translate: "MENU.CUSTOMER_SERVICE.REOPENED_COMPLAINTS"
                        },
                        {
                            title: 'Closed Final Bill Request',
                            page: '/closed-final-bill-req-list',
                            translate: "MENU.CUSTOMER_SERVICE.CLOSED_FINAL_BILL_REQUEST"
                        },
                        {
                            title: 'Complaints Under Site Inspection',
                            page: '/complaints-under-site-inspection-list',
                            translate: "MENU.CUSTOMER_SERVICE.COMPLAINTS_UNDER_SITE_INSPECTION"
                        },
                    ]
                },
                {
                    title: 'Customer Changes',
                    page: '/customer-changes',
                    translate: "MENU.CUSTOMER_SERVICE.CUSTOMER_CHANGES",

                    submenu: [
                        {
                            title: 'Title Transfer Changes',
                            page: '/title-transfer-change',
                            translate: "MENU.CUSTOMER_SERVICE.TITLE_TRANSFER_CHANGES"
                        },
                        {
                            title: 'Title Transfer Complaints',
                            page: '/title-transfer-complaints',
                            translate: "MENU.CUSTOMER_SERVICE.TITLE_TRANSFER_COMPLAINTS"
                        },
                        {
                            title: 'Area Changes',
                            page: '/area-changes',
                            translate: "MENU.CUSTOMER_SERVICE.AREA_CHANGES"
                        },
                        {
                            title: 'Area Changes Complaints',
                            page: '/area-changes-complaints',
                            translate: "MENU.CUSTOMER_SERVICE.AREA_CHANGES_COMPLAINTS"

                        },
                        {
                            title: 'Adress Correction',
                            page: '/address-correction',
                            translate: "MENU.CUSTOMER_SERVICE.ADDRESS_CORRECTION"

                        },
                        {
                            title: 'Adress Correction Complaints',
                            page: '/address-correction-complaints',
                            translate: "MENU.CUSTOMER_SERVICE.ADDRESS_CORRECTION_COMPLAINTS"

                        },
                        {
                            title: 'Tariff Changes',
                            page: '/tariff-changes',
                            translate: "MENU.CUSTOMER_SERVICE.TARIFF_CHARGES"
                        },
                        {
                            title: 'Name Correction Complaints',
                            page: '/name-correction-complaints',
                            translate: "MENU.CUSTOMER_SERVICE.NAME_CORRECTION_COMPLAINTS"
                        },
                        {
                            title: 'Name Correction Requests',
                            page: '/name-correction-requests',
                            translate: "MENU.CUSTOMER_SERVICE.NAME_CORRECTION_REQUEST"
                        },
                        {
                            title: 'Tariff Correction Approval',
                            page: '/tariff-correction-approval',
                            translate: "MENU.CUSTOMER_SERVICE.TARIFF_CORRECTION_REQUEST"
                        },
                        {
                            title: 'Phase Correction Approvals',
                            page: '/phase-correction-approval',
                            translate: "MENU.CUSTOMER_SERVICE.PHASE_CORRECTION_APPROVALS"
                        },
                        {
                            title: 'Area Correction Requests',
                            page: '/area-correction-requests',
                            translate: "MENU.CUSTOMER_SERVICE.AREA_CORRECTION_REQUESTS"

                        },
                        {
                            title: 'Area Correction Complaints',
                            page: '/area-correction-complaints',
                            translate: "MENU.CUSTOMER_SERVICE.AREA_CORRECTION_COMPLAINTS"

                        },
                        {
                            title: 'Final Bill Complaints',
                            page: '/final-bill-complaints',
                            translate: "MENU.CUSTOMER_SERVICE.FINAL_BILL_COMPLAINTS"
                        },
                        {
                            title: 'Close Bill Requests',
                            page: '/close-bill-requests',
                            translate: "MENU.CUSTOMER_SERVICE.CLOSE_BILL_REQUESTS"
                        },

                    ]
                },
                {
                    title: 'Supply Realated Complaints',
                    page: '/supply',
                    translate: "MENU.CUSTOMER_SERVICE.SUPPLY_COMPLAINTS",

                    submenu: [
                        {
                            title: 'Supply Realated Complaints',
                            page: '/complaints',
                            translate: "MENU.CUSTOMER_SERVICE.SUPPLY_COMPLAINT"
                        },

                    ]
                },
                {
                    title: 'Meter Realated Complaints',
                    page: '/meter',
                    translate: "MENU.CUSTOMER_SERVICE.METER_COMPLAINTS",

                    submenu: [
                        {
                            title: 'Job Order List',
                            page: '/job-order-list',
                            translate: "MENU.CUSTOMER_SERVICE.JOB_ORDER_LIST"
                        },
                        {
                            title: 'Calibration Report',
                            page: '/callibration-report',
                            translate: "MENU.CUSTOMER_SERVICE.CALIBRATION_REPORT"
                        },
                        {
                            title: 'Complaint Under Lab Appoval',
                            page: '/complaint-under-lab-approval',
                            translate: "MENU.CUSTOMER_SERVICE.COMPLAINT_UNDER_LAB_APPROVAL"
                        },

                    ]
                },
                {
                    title: 'Billing Realated Complaints',
                    page: '/billing',
                    translate: "MENU.CUSTOMER_SERVICE.BILLING_COMPLAINTS",

                    submenu: [
                        {
                            title: 'Complaints Under Bill Revision',
                            page: '/complaint-under-bill-revision',
                            translate: "MENU.CUSTOMER_SERVICE.COMPLAINTS_UNDER_BILL_REVISION"
                        },
                        {
                            title: 'Permanent Disconnection Service Order',
                            page: '/permanent-disconnection-service-order',
                            translate: "MENU.CUSTOMER_SERVICE.PERMANENT_DISCON_SERVICE_ORDER"
                        },

                    ]
                },
            ]
        },
        {
            title: 'Query Modification',
            page: '/query-modification',
            translate: "MENU.CUSTOMER_SERVICE.QUERY_MODIFICATION",

            submenu: [
                {
                    title: 'Miscellaeous Invoice Generation',
                    page: '/miscellaeous-invoice-generation',
                    translate: "MENU.CUSTOMER_SERVICE.MISCELLAEOUS_INVOICE_GENERATION"
                },
                {
                    title: 'Debit Journal Entry',
                    page: '/debit-journal-entry',
                    translate: "MENU.CUSTOMER_SERVICE.DEBIT_JOURNAL_ENTRY"
                },
                {
                    title: 'Credit Jornal Entry',
                    page: '/credit-journal-entry',
                    translate: "MENU.CUSTOMER_SERVICE.CREDIT_JOURNAL_ENTRY"
                },
                {
                    title: 'RJ Approval',
                    page: '/rj-approval',
                    translate: "MENU.CUSTOMER_SERVICE.RJ_APPROVAL"
                },
            ]
        },
        {
            title: 'Escalations',
            page: '/escalation',
            translate: "MENU.CUSTOMER_SERVICE.ESCALATIONS",

            submenu: [
                {
                    title: 'First Escalations',
                    page: '/first-escalation-list',
                    translate: "MENU.CUSTOMER_SERVICE.FIRST_ESCALATIONS"
                },
                {
                    title: 'Second Escalations',
                    page: '/second-escalation-list',
                    translate: "MENU.CUSTOMER_SERVICE.SECOND_ESCALATIONS"
                },
                {
                    title: 'Beyond Escalation',
                    page: '/beyond-escalation-list',
                    translate: "MENU.CUSTOMER_SERVICE.BEYOND_ESCALATIONS"
                },
                {
                    title: 'Exp',
                    page: '/exp',
                    translate: "MENU.CUSTOMER_SERVICE.EXP"
                },
            ]
        },
        {
            title: 'Aknowledgments',
            page: '/aknowledgment',
            translate: "MENU.CUSTOMER_SERVICE.ACKNOWLEDGMENT",

            submenu: [
                {
                    title: 'Registeration',
                    page: '/registeration',
                    translate: "MENU.CUSTOMER_SERVICE.REGISTRATION"
                },
                {
                    title: 'Dispatch',
                    page: '/dispatch',
                    translate: "MENU.CUSTOMER_SERVICE.DISPATCH"
                },
                {
                    title: 'Complaint Status',
                    page: '/complaint-status',
                    translate: "MENU.CUSTOMER_SERVICE.COMPLAINT_STATUS"
                },
                {
                    title: 'Check Meter Complaint Status',
                    page: '/meter-complaint-status',
                    translate: "MENU.CUSTOMER_SERVICE.METER_COMPLAINT_STATUS"
                },
            ]
        },
        {
            title: 'Reports',
            page: '/reports',
            translate: "MENU.CUSTOMER_SERVICE.REPORTS",

            submenu: [
                {
                    title: 'Status Report',
                    page: '/status-report',
                    translate: "MENU.CUSTOMER_SERVICE.STATUS_REPORT"
                },
                {
                    title: 'Query Registerd Report',
                    page: '/query-reg-report',
                    translate: "MENU.CUSTOMER_SERVICE.QUERY_REG_REPORT"
                },
                {
                    title: 'Rectified Complaint Report',
                    page: '/rectified-complaint-report',
                    translate: "MENU.CUSTOMER_SERVICE.RECTIFIED_COMPLAINT_REPORT"
                },
                {
                    title: 'Query Aknowledge Report',
                    page: '/query-aknowledge-report',
                    translate: "MENU.CUSTOMER_SERVICE.QUERY_ACKNOWLEDGE_REPORT"
                },
                {
                    title: 'Category Changes',
                    page: '/category-change-report',
                    translate: "MENU.CUSTOMER_SERVICE.CATEGORY_CHANGE"
                },
                {
                    title: 'Phase Changes Report',
                    page: '/phase-change-report',
                    translate: "MENU.CUSTOMER_SERVICE.PHASE_CHANGE_REPORT"
                },
                {
                    title: 'Name Change Report',
                    page: '/name-change-report',
                    translate: "MENU.CUSTOMER_SERVICE.NAME_CHANGE_REPORT"
                },
                {
                    title: '!RJ Wrong Posting Report!',
                    page: '/rjwrong-posting-report',
                    translate: "MENU.CUSTOMER_SERVICE.RJ_WRONG_POSTING_REPORT"
                },
                {
                    title: '!RJ Wrong Post Pending Report!',
                    page: '/rjwrong-posting-pending-report',
                    translate: "MENU.CUSTOMER_SERVICE.RJ_WRONG_POST_PENDING_REPORT"
                },

            ]
        },
        {
            title: 'eCall Reports',
            page: '',
            translate: "MENU.CUSTOMER_SERVICE.ECALL_REPORTS",

            submenu: [
                {
                    title: 'eCall Reports',
                    page: '/dispatch-list',
                    translate: "MENU.CUSTOMER_SERVICE.ECALL_REPORT"
                },
                {
                    title: 'Feadback Reports',
                    page: '/rejected-complaints/rejected-complaints-list',
                    translate: "MENU.CUSTOMER_SERVICE.FEEDBACK_REPORTS"
                },
            ]
        },
        {
            title: 'eCall Registeration',
            page: '',
            translate: "MENU.CUSTOMER_SERVICE.ECALL_REGISTRATION",

            submenu: [
                {
                    title: 'IVRS Registeration',
                    page: '/ecall-complaints/ecall-registration/list-ecall-complaints',
                    translate: "MENU.CUSTOMER_SERVICE.IVRS_REGISTRATION"
                },
                {
                    title: 'Complaint Status',
                    page: '/ecall-complaints/complaint-status',
                    translate: "MENU.CUSTOMER_SERVICE.COMP_STATUS"
                },
                {
                    title: 'Feedback Of Complaint',
                    page: '/ecall-complaints/feedback-of-complaints',
                    translate: "MENU.CUSTOMER_SERVICE.FEEDBACK_OF_COMPLAINT"
                },
                {
                    title: 'Feedback Captured',
                    page: '/ecall-complaints/feedback-captured',
                    translate: "MENU.CUSTOMER_SERVICE.FEEDBACK_CAPTURED"
                }
            ]
        }

    ]
}