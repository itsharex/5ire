import { IServiceProvider } from './types';

export default {
  name: 'Google',
  apiBase: 'https://generativelanguage.googleapis.com',
  currency: 'USD',
  options: {
    apiBaseCustomizable: true,
    apiKeyCustomizable: true
  },
  chat: {
    apiSchema: ['base', 'key', 'model'],
    presencePenalty: { min: -2, max: 2, default: 0 },
    topP: { min: 0, max: 1, default: 1 },
    temperature: { min: 0, max: 1, default: 0.9 },
    options: {
      modelCustomizable: true,
      streamCustomizable: false,
    },
    models: {
      'gemini-2.0-flash': {
        name: 'gemini-2.0-flash-001',
        contextWindow: 1048576,
        maxTokens: 8192,
        defaultMaxTokens:8000,
        inputPrice: 0.0001,
        outputPrice: 0.0004,
        jsonModelEnabled: true,
        toolEnabled: true,
        vision:{
          enabled:true,
        },
        description: `Next generation features, superior speed, native tool use, and multimodal generation`,
        group: 'Gemini',
      },
      'gemini-2.0-flash-lite': {
        name: 'gemini-2.0-flash-lite-preview-02-05',
        contextWindow: 1048576,
        maxTokens: 8192,
        defaultMaxTokens:8000,
        inputPrice: 0.000075,
        outputPrice: 0.0003,
        jsonModelEnabled: true,
        toolEnabled: true,
        isDefault: true,
        vision:{
          enabled:true,
        },
        description: `Quality improvements, celebrate 1 year of Gemini`,
        group: 'Gemini',
      },
      'gemini-1.5-pro': {
        name: 'gemini-1.5-pro',
        contextWindow: 1048576,
        maxTokens: 8192,
        defaultMaxTokens:8000,
        inputPrice: 0.00035,
        outputPrice: 0.0105,
        jsonModelEnabled: true,
        toolEnabled: true,
        vision:{
          enabled:true,
        },
        description: `The multi-modal model from Google's Gemini family that balances model performance and speed.`,
        group: 'Gemini',
      },
      'gemini-1.5-flash': {
        name: 'gemini-1.5-flash',
        contextWindow: 1048576,
        maxTokens: 8192,
        defaultMaxTokens:8000,
        inputPrice: 0.00035,
        outputPrice: 0.00105,
        jsonModelEnabled: true,
        toolEnabled: true,
        vision:{
          enabled:true,
        },
        description: `Lightweight, fast and cost-efficient while featuring multimodal reasoning and a breakthrough long context window of up to one million tokens.`,
        group: 'Gemini',
      },
      'gemini-1.5-flash-8b': {
        name: 'gemini-1.5-flash-8b',
        contextWindow: 1048576,
        maxTokens: 8192,
        defaultMaxTokens:8000,
        inputPrice: 0.0000375,
        outputPrice: 0.00015,
        jsonModelEnabled: true,
        toolEnabled: true,
        vision:{
          enabled:true,
        },
        description: `The Gemini 1.5 Flash-8B is a small model designed for tasks that require less intelligence.`,
        group: 'Gemini',
      },
    },
  },
} as IServiceProvider;
