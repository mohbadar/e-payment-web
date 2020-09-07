export class PageConfig {
    public defaults: any = {
        '': {
            'title': 'Dashboard',
            'desc': 'Latest updates and statistic charts'
        },
        configuration: {
            network: {
                'station-type': {
                    page: { title: 'Station Type', desc: '' },
                    add: {
                        page: { title: 'Create Station Type', desc: '' },
                    },
                    update: {
                        page: { title: 'Update Station Type', desc: '' },
                    }
                },
                'substation-master': {
                    page: { title: 'Substation Master', desc: '' }
                },
                'distribution-transformers-master': {
                    page: { title: 'Distribution Transformer Master', desc: '' }
                }
            },
            office: {
                'office-type': {
                    page: { title: 'Office Type', desc: '' }
                },
                'office-master': {
                    page: { title: 'Office Master', desc: '' }
                },
            },
            nsc: {
                'appliance-master': {
                    page: { title: 'Appliance Master', desc: '' }
                },
                'units-master': {
                    page: { title: 'Units Master', desc: '' }
                },
            },
            csc: {
                'request_type': {
                    page: { title: 'Request Type', desc: '' }
                },
                'request_complaint': {
                    page: { title: 'Request / Complaint', desc: '' }
                },
            },
            metering: {
                'meter-capacity-master': {
                    page: { title: 'Meter Capacity Master', desc: '' }
                },
                'meter-make-detail': {
                    page: { title: 'Meter Make Details', desc: '' }
                },
                'meter-status-master': {
                    page: {
                        title: 'Meter Status Master', desc: ''
                    },
                    add: {
                        page: {
                            title: 'Create Meter Status Master', desc: ''
                        }
                    },
                    update: {
                        page: {
                            title: 'Update Meter Status Master', desc: ''
                        }
                    }
                },
            },
            billing: {
                'tariff-parameters': {
                    page: { title: 'Tariff Parameters', desc: '' }
                },
                'behaviour-configuration': {
                    page: { title: 'Behavour Configuration', desc: '' },
                    add: { page: { title: 'Create Behavour Configuration', desc: '' }, },
                    update: { page: { title: 'Update Behavour Configuration', desc: '' }, }
                },
                'bill-due-date-days': {
                    page: { title: 'Bill Due Date Days', desc: '' },
                    add: { page: { title: 'Create Bill Due Date Days', desc: '' }, },
                    update: { page: { title: 'Update Bill Due Date Days', desc: '' }, }
                },
                'category-master': {
                    page: { title: 'Category Master', desc: '' },
                    add: { page: { title: 'Create Category Master' } },
                    update: { page: { title: 'Update Category Master ' } }
                },
                'category-type-master': {
                    page: { title: 'Category Type Master', desc: '' },
                    add: { page: { title: 'Create Category Type Master', desc: '' }, },
                    update: { page: { title: 'Update Category Type Master', desc: '' }, }
                },
                'customer-group-master': {
                    page: { title: 'Customer Group Master', desc: '' },
                    add: { page: { title: 'Create Customer Group Master', desc: '' }, },
                    update: { page: { title: 'Update Customer Group Master', desc: '' }, }
                },
                'process-behaviour-link-configuration': {
                    page: { title: 'Process Behaviour Link Configuration', desc: '' },
                    add: { page: { title: 'Create Process Behaviour Link Configuration', desc: '' }, },
                    update: { page: { title: 'Update Process Behaviour Link Configuration', desc: '' }, }
                },
                'process-configuration': {
                    page: { title: 'Process Configuration', desc: '' },
                    add: { page: { title: 'Create Process Configuration', desc: '' }, },
                    update: { page: { title: 'Update Process Configuration', desc: '' }, }
                },
                'tariff-charges': {
                    page: { title: 'Tarrif Charges', desc: '' },
                    add: { page: { title: 'Create Tarrif Charges', desc: '' }, },
                    update: { page: { title: 'Update Tarrif Charges', desc: '' }, }
                }
            },
            payment: {
                'bank': {
                    page: { title: 'Bank Master', desc: '' }
                },
                'branch': {
                    page: { title: 'Bank Branches', desc: '' }
                },
            },
            province: {
                page: { title: 'Province', desc: '' }
            },
            'e-signature': {
                page: { title: 'E-Signature', desc: '' }
            }
        },
        'service-connection': {
            'service-connection-menu': {
                'online-service-connection': {
                    'online-service-registration': {
                        page: { title: 'Service Registration', desc: '' }
                    },
                    'online-dispatch': {
                        page: { title: 'Dispatchs', desc: '' }
                    },
                },
                'offline-service-connection': {
                    'nsc-offline': {
                        page: { title: 'NSC Offline', desc: '' }
                    },
                    'nsc-feedback-list': {
                        page: { title: 'NSC Feedback List', desc: '' }
                    },
                },
                'lpu-service-connection': {
                    'lpu-service-registration': {
                        page: { title: 'Service Registration', desc: '' }
                    },
                    'lpu-account-number-generation': {
                        page: { title: 'Account number generation', desc: '' }
                    },
                }
            }
        },
        'customer-service': {},
        metering: {
        },
        billing: {
            billing: {
                'bill-process': {
                    page: { title: 'Bill Process', desc: '' }
                }
            }
        },
        payments: {},
        helpdesk: {}
    };

    public get configs(): any {
        return this.defaults;
    }
}
