export interface BuildConfig {
  API_KEY: string
}


const buildConfig: BuildConfig = {
  API_KEY: process.env.API_KEY ?? ""
}

export default buildConfig;
