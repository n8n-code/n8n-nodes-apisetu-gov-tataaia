import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovTataaiaApi implements ICredentialType {
        name = 'N8nDevApisetuGovTataaiaApi';

        displayName = 'Apisetu Gov Tataaia API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovTataaia/apisetu-gov-tataaia.svg', dark: 'file:../nodes/ApisetuGovTataaia/apisetu-gov-tataaia.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/tataaia/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/tataaia/v3',
                        description: 'The base URL of your Apisetu Gov Tataaia API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
