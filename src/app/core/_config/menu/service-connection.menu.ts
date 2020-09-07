export const serviceConnectionMenuModule = {
    title: 'ServiceConnection',
    root: true,
    alignment: 'left',
    toggle: 'click',
    translate: 'MENU.SERVICE_CONNECTION.MODULE_NAME',
    page: '/service-connection',
    submenu: [
        {
            title: 'Online Service Connection',
            page: '/service-connection-menu/online-service-connection',
            translate: 'MENU.SERVICE_CONNECTION.ONLINE_SERVICE_CONNECTION',
            submenu: [
                {
                    title: 'Service Registration',
                    page: '/online-service-registration',
                    translate: 'MENU.SERVICE_CONNECTION.SERVICE_REGISTRATION',
                },
                {
                    title: 'Dispatch',
                    page: '/online-dispatch',
                    translate: 'MENU.SERVICE_CONNECTION.DISPATCH',
                },
                {
                    title: 'Site Inspection',
                    page: '/online-site-inspection',
                    translate: 'MENU.SERVICE_CONNECTION.SITE_INSPECTION',
                },
                {
                    title: 'Site Inspection Rejection',
                    page: '/online-site-inspection-rejection',
                    translate: 'MENU.SERVICE_CONNECTION.SITE_INSPECTION_REGISTRATION',
                },
                {
                    title: 'Load Approval',
                    page: '/online-load-approval',
                    translate: 'MENU.SERVICE_CONNECTION.LOAD_APPROVAL',
                },
                {
                    title: 'Transformer Updation',
                    page: '/online-transformer-updation',
                    translate: 'MENU.SERVICE_CONNECTION.TRANSFORMER_UPDATION',
                },
                {
                    title: 'New Meterbox Installation',
                    page: '/online-meterbox-installation',
                    translate: 'MENU.SERVICE_CONNECTION.NEW_METERBOX_INSTALLATION',
                },
                {
                    title: 'Estimate',
                    page: '/online-estimate',
                    translate: 'MENU.SERVICE_CONNECTION.ONLINE_ESTIMATE',
                },
                {
                    title: 'Returned Estimate',
                    page: '/online-returned-estimate',
                    translate: 'MENU.SERVICE_CONNECTION.ONLINE_RETURNED_ESTIMATE',
                },
                {
                    title: 'Estimate Approval',
                    page: '/online-estimate-approval',
                    translate: 'MENU.SERVICE_CONNECTION.ONLINE_ESTIMATE_APPROVAL',
                },
                {
                    title: 'Consumer intimation',
                    page: '/online-consumer-intemation',
                    translate: 'MENU.SERVICE_CONNECTION.CONSUMER_INTIMATION',
                },
                {
                    title: 'Rejected Services',
                    page: '/online-rejected-services',
                    translate: 'MENU.SERVICE_CONNECTION.ONLINE_REJECTED_SERVICES',
                },
                {
                    title: 'Account Number Generation',
                    page: '/online-account-number-generation',
                    translate: 'MENU.SERVICE_CONNECTION.ONLINE_ACCOUNT_NUMBER_GENERATION',
                },
                {
                    title: 'Commission of Installation',
                    page: '/online-commission-installation',
                    translate: 'MENU.SERVICE_CONNECTION.ONLINE_COMMISSION_INSTALLATION',
                },
                {
                    title: 'Store Approval',
                    page: '/online-store-approval',
                    translate: 'MENU.SERVICE_CONNECTION.ONLINE_STORE_APPROVAL',
                },
                {
                    title: 'WO Completion',
                    page: '/online-wo-completion',
                    translate: 'MENU.SERVICE_CONNECTION.ONLINE_WO_COMPLETION',
                },
                {
                    title: 'Service Release',
                    page: '/online-service-release',
                    translate: 'MENU.SERVICE_CONNECTION.ONLINE_SERVICE_RELEASE',
                },
                {
                    title: 'Inbox User View',
                    page: '/online-inbox-userview',
                    translate: 'MENU.SERVICE_CONNECTION.ONLINE_INBOX_USERVIIEW',
                },
                {
                    title: 'Grid Extension Bill',
                    page: '/online-grid-extension-bill',
                    translate: 'MENU.SERVICE_CONNECTION.ONLINE_GRID_EXTENSION_BILL',
                },
                {
                    title: 'Approves Transformer Updation',
                    page: '/online-approves-transformer-updation',
                    translate: 'MENU.SERVICE_CONNECTION.ONLINE_APPROVES_TRANSFORMER_UPDATION',
                },
                {
                    title: 'Permanently Rejected',
                    page: '/online-permanently-rejected',
                    translate: 'MENU.SERVICE_CONNECTION.ONLINE_PERMANENTLY_REJECTED',
                }
            ]
        },
        {
            title: 'Offline Service Connection',
            page: '/service-connection-menu/offline-service-connection',
            translate: 'MENU.SERVICE_CONNECTION.OFFLINE_SERVICE_CONNECTION',
            submenu: [
                {
                    title: 'NSC Offline',
                    page: '/nsc-offline',
                    translate: 'MENU.SERVICE_CONNECTION.NSC_OFFLINE',
                },
                {
                    title: 'NSC Feedback List',
                    page: '/nsc-feedback-list',
                    translate: 'MENU.SERVICE_CONNECTION.NSC_FEEDBACK_LIST',
                },
            ]
        },

        {
            title: 'LPU Service Connection',
            page: '/service-connection-menu/lpu-service-connection',
            translate: 'MENU.SERVICE_CONNECTION.LPU_SERVICE_CONNECTION',
            submenu: [
                {
                    title: 'Service Registration',
                    page: '/lpu-service-registration',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_SERVICE_REGISTRATION',
                },
                {
                    title: 'Account number generation',
                    page: '/lpu-account-number-generation',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_ACCOUNT_NUMBER_GENERATION',
                },
                {
                    title: 'Assign relay department member by RM',
                    page: '/lpu-assign-relay-dep-mem-by-rm',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_ASSIGN_RELAY_DEP_MEM_BY_RM',
                },
                {
                    title: 'Assign site inspection member by ECD',
                    page: '/lpu-assign-site-ins-mem-by-ecd',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_ASIGN_SITE_INS_MEM_BY_ECD',
                },
                {
                    title: 'Assigning site inspector',
                    page: '/lpu-assigning-site-inspector',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_ASSIGNING_SITE_INSPECTOR',
                },
                {
                    title: 'Commitment letter upload',
                    page: '/lpu-commitment-letter-upload',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_COMMITMENT_LETTER_UPLOAD',
                },
                {
                    title: 'Compensation charges estimation',
                    page: '/lpu-compensation-charges-estimation',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_COMPENSATION_CHARGES_ESTIMATION',
                },
                {
                    title: 'COO Review',
                    page: '/lpu-coo-review',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_COO_REVIEW',
                },
                {
                    title: 'DP Review',
                    page: '/lpu-dp-review',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_DP_REVIEW',
                },
                {
                    title: 'Electro Technic Department',
                    page: '/lpu-electro-technic-dep',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_ELECTRO_TECHNIC_DEP',
                },
                {
                    title: 'First consumer intimation',
                    page: '/lpu-first-consumer-intimation',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_FIRST_CONSUMER_INTIMATION',
                },
                {
                    title: 'First site inspection report approval COO',
                    page: '/lpu-first-site-ins-rep-app-coo',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_FIRST_SITE_INS_REP_APP_COO',
                },
                {
                    title: 'First site inspection report approval DPO',
                    page: '/lpu-first-site-ins-rep-app-coo',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_FIRST_SITE_INS_REP_APP_DPO',
                },
                {
                    title: 'First site inspection report approval MD',
                    page: '/lpu-first-site-ins-rep-app-coo',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_FIRST_SITE_INS_REP_APP_MD',
                },
                {
                    title: 'First site inspection report approval OD',
                    page: '/lpu-first-site-ins-rep-app-coo',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_FIRST_SITE_INS_REP_APP_OD',
                },
                {
                    title: 'Junction station assigning member',
                    page: '/lpu-junction-station-ass-mem',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_JUNCTION_STATION_ASS_MEM',
                },
                {
                    title: 'Meter factor determ report by RDM',
                    page: '/lpu-meter-factor-determ-rep-by-rdm',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_METER_FACTOR_DETERM_REP_BY_RDM',
                },
                {
                    title: 'Meter lab office review',
                    page: '/lpu-meter-lab-office-review',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_METER_LAB_OFFICE_REVIEW',
                },
                {
                    title: 'MSM-review',
                    page: '/lpu-msm-review',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_MSM_REVIEW',
                },
                {
                    title: 'MSM-review-approval',
                    page: '/lpu-msm-review-approval',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_MSM_REVIEW_APPROVAL',
                },
                {
                    title: 'Network expansion manager review',
                    page: '/lpu-network-expansion-manager-review',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_NETWORK_EXPANSION_MANAGER_REVIEW',
                },
                {
                    title: 'NM approval to check DTR',
                    page: '/lpu-nm-app-to-check-dtr',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_NM_APP_TO_CHECK_DTR',
                },
                {
                    title: 'PED manager',
                    page: '/lpu-ped-manager',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_PED_MANAGER',
                },
                {
                    title: 'Relay report approval by RM',
                    page: '/lpu-relay-rep-app-by-rm',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_RELAY_REP_APP_BY_RM',
                },
                {
                    title: 'Second site inspection PED inspector',
                    page: '/lpu-sec-site-ins-ped-inspector',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_SEC_SITE_INS_PED_INSPECTOR',
                },
                {
                    title: 'Second consumer intimation',
                    page: '/lpu-second-consumer-intimation',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_SEC_CONS_INTIMATION',
                },
                {
                    title: 'Serials recheck',
                    page: '/lpu-serials-recheck',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_SERIALS_RECHECK',
                },
                {
                    title: 'Service release',
                    page: '/lpu-service-release',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_SERVICE_RELEASE',
                },
                {
                    title: 'Technical inspection approval by PED',
                    page: '/lpu-technical-ins-app-by-ped',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_TECHNICAL_INS_APP_BY_PED',
                },
                {
                    title: 'Time allocation',
                    page: '/lpu-time-allocation',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_TIME_ALLOCATION',
                },
                {
                    title: 'Transformer connection',
                    page: '/lpu-transformer-connection',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_TRANS_CONNECTION',
                },
                {
                    title: 'Transformer maintenance DEP',
                    page: '/lpu-transformer-maintenance-dep',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_TRANS_MAINTAIN_DEP',
                },
                {
                    title: 'Estimation',
                    page: '/lpu-transformer-connection',
                    translate: 'MENU.SERVICE_CONNECTION.LPU_ESTIMATION',
                },
            ]
        },
        // {
        //     title: 'Complaints to Be Closed',
        //     page: '/wizard/wizard-1',

        //     submenu: [
        //         {
        //             title: 'Rectified Complaints',
        //             page: '/material/form-controls/autocomplete',
        //         },
        //         {
        //             title: 'Info Required Complaints',
        //             page: '/material/form-controls/checkbox'
        //         },
        //         {
        //             title: 'Duplicate Complaints',
        //             page: '/material/form-controls/autocomplete',
        //         },
        //         {
        //             title: 'Invalid Complaints',
        //             page: '/material/form-controls/checkbox'
        //         },
        //     ]
        // },
        // {
        //     title: 'Super User Observations',
        //     page: '/wizard/wizard-1',

        //     submenu: [
        //         {
        //             title: 'Pending Complaints',
        //             page: '/material/form-controls/autocomplete',
        //         },
        //         {
        //             title: 'Rectified Complaints',
        //             page: '/material/form-controls/autocomplete',
        //         },
        //         {
        //             title: 'Information Required Complaints',
        //             page: '/material/form-controls/checkbox'
        //         },
        //         {
        //             title: 'Duplicate Complaints',
        //             page: '/material/form-controls/autocomplete',
        //         },
        //         {
        //             title: 'Invalid Complaints',
        //             page: '/material/form-controls/checkbox'
        //         },

        //         {
        //             title: 'Total Complaints',
        //             page: '/material/form-controls/autocomplete',
        //         },
        //     ]
        // },

    ]
}