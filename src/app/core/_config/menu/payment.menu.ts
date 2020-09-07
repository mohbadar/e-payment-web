export const paymentMenuModule = {
    title: 'Payments',
    root: true,
    alignment: 'left',
    toggle: 'click',
    page: '/payments',
    translate: 'MENU.PAYMENTS.MODULE_NAME',
    submenu: [
        {
            title: 'Collections',
            page: '/collections',
            translate: 'MENU.PAYMENTS.COLLECTIONS'
        },

        {
            title: 'Group Payments',
            page: '/group-payments',
            translate: 'MENU.PAYMENTS.GROUP_PAYMENTS',
            submenu: [
                {
                    title: 'Bill receipt cancellation',
                    page: '/br-cancellation',
                    translate: 'MENU.PAYMENTS.BR_CANCELLATION'
                },
                {
                    title: 'Miscellaneous and energy charges',
                    page: '/me-charges',
                    translate: 'MENU.PAYMENTS.ME_CHARGE'
                }
            ]
        },


        {
            title: 'Advanced payments',
            page: '/advance-payments',
            translate: 'MENU.PAYMENTS.ADVANCE_PAYMENT',
            submenu: [
                {
                    title: 'Advanced payment Request',
                    page: '/payment-request',
                    translate: 'MENU.PAYMENTS.PAYMENT_REQUEST'
                },
                {
                    title: 'Request Approval',
                    page: '/request-approval',
                    translate: 'MENU.PAYMENTS.REQUEST_APPROVAL'
                },
                {
                    title: 'CA Approval',
                    page: '/ca-approval',
                    translate: 'MENU.PAYMENTS.CA_APPROVAL'
                },
                {
                    title: 'Billing Department Approval',
                    page: '/billing-dept-approval',
                    translate: 'MENU.PAYMENTS.BILLING_DEPT_APPROVAL'
                },
            ]
        },


        {
            title: 'Installment Payments',
            page: '/installment-payments',
            translate: 'MENU.PAYMENTS.INSTALLMENT_PAYMENTS',
            submenu: [
                {
                    title: 'Installment Configuration',
                    page: '/configuration',
                    translate: 'MENU.PAYMENTS.INSTALLMENT_CONFIG'
                },
                {
                    title: 'Installment Configuration Approval',
                    page: '/approval',
                    translate: 'MENU.PAYMENTS.INSTALLMENT_CONFIG_APPROVAL'
                },
                {
                    title: 'Installment Black List',
                    page: '/blacklist',
                    translate: 'MENU.PAYMENTS.INSTALLMENT_BLACK_LIST'
                },
                {
                    title: 'Installment Permanent Cancellation',
                    page: '/permanent-cancellation',
                    translate: 'MENU.PAYMENTS.INSTALLMENT_PERMANENT_CANCELLATION'
                },
                {
                    title: 'Re-connection Installment Configuration',
                    page: '/reconnection-configuration',
                    translate: 'MENU.PAYMENTS.RECONNECTION_INSTALLMENT_CONFIG'
                },
                {
                    title: 'Duplicate Installment Acknowledgment',
                    page: '/duplicate-acknowledgment',
                    translate: 'MENU.PAYMENTS.DUPLICATE_INSTALLMENT_ACKNOWLEDGMENT'
                },
            ]
        },

        {
            title: 'Search payments',
            page: '/search-payments',
            translate: 'MENU.PAYMENTS.SEARCH_PAYMENTS',
        },

        {
            title: 'Reports',
            page: '/reports',
            translate: 'MENU.PAYMENTS.REPORTS'
        },

        {
            title: 'Payment Posting',
            page: '/payment-posting',
            translate: 'MENU.PAYMENTS.PAYMENT_POSTING'
        },

        {
            title: 'User Approval',
            page: '/user-approval',
            translate: 'MENU.PAYMENTS.USER_APPROVAL'
        },

    ]
}