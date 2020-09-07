export const helpdeskMenuModule = {
    title: 'HelpDesk',
    root: true,
    alignment: 'left',
    toggle: 'click',
    translate: 'MENU.HELPDESK.MODULE_NAME',
    page: '/helpdesk',
    submenu: [
        {
            title: 'Registration',
            page: '',
            translate: "MENU.HELPDESK.REGISTRATION",

            submenu: [
                {
                    title: 'Registration',
                    page: '',
                    translate: "MENU.HELPDESK.REGISTRATIONS"
                },
                {
                    title: 'Complaint Status',
                    page: '/complaint-status',
                    translate: "MENU.HELPDESK.COMPLAINT_STATUS"
                },
            ]
        },
        {
            title: 'Dispatch',
            page: '/dispatch-complaints',
            translate: "MENU.HELPDESK.DISPATCH"
        },
        {
            title: 'Complaints to Be Closed',
            page: '/complaints',
            translate: "MENU.HELPDESK.COMPLAINTS",

            submenu: [
                {
                    title: 'Rectified Complaints',
                    page: '/rectified',
                    translate: "MENU.HELPDESK.RECTIFIED_COMPLAINTS",
                },
                {
                    title: 'Info Required Complaints',
                    page: '/inforeq',
                    translate: "MENU.HELPDESK.INFO_REQUIRED_COMPLAINTS",
                },
                {
                    title: 'Duplicate Complaints',
                    page: '/duplicate',
                    translate: "MENU.HELPDESK.DUPLICATE_COMPLAINTS",
                },
                {
                    title: 'Invalid Complaints',
                    page: '/invalid',
                    translate: "MENU.HELPDESK.INVALID_COMPLAINTS",
                },
            ]
        },
        // {
        //     title: 'Super User Observations',
        //     page: '/helpdesk',
        //     
        //     submenu: [
        //         {
        //             title: 'Pending Complaints',
        //             page: '/helpdesk/admin/complaints/pending',
        //         },
        //         {
        //             title: 'Rectified Complaints',
        //             page: '/helpdesk/admin/complaints/rectified',
        //         },
        //         {
        //             title: 'Information Required Complaints',
        //             page: '/helpdesk/admin/complaints/info_required'
        //         },
        //         {
        //             title: 'Duplicate Complaints',
        //             page: '/helpdesk/admin/complaints/duplicate',
        //         },
        //         {
        //             title: 'Invalid Complaints',
        //             page: '/helpdesk/admin/complaints/invalid'
        //         },

        //         {
        //             title: 'Total Complaints',
        //             page: '/helpdesk/admin/complaints/total',
        //         },
        //     ]
        // },

    ]
}