// /*
//  * @Author: bugdr
//  * @Date: 2022-06-28 10:27:51
//  * @LastEditors: bugdr
//  * @LastEditTime: 2022-06-28 10:34:28
//  * @FilePath: \blog-next\hooks\settings\index.ts
//  * @Description: 全局配置
//  */
// // 全局的配置
// export const useGlobSetting = (): Readonly<GlobConfig> => {
//   const {
//     VITE_GLOB_APP_TITLE,
//     VITE_GLOB_API_URL,
//     VITE_GLOB_APP_SHORT_NAME,
//     VITE_GLOB_API_URL_PREFIX,
//     VITE_GLOB_UPLOAD_URL,
//   } = getAppEnvConfig();

//   if (!/[a-zA-Z\_]*/.test(VITE_GLOB_APP_SHORT_NAME)) {
//     warn(
//       `VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.`,
//     );
//   }

//   // Take global configuration
//   const glob: Readonly<GlobConfig> = {
//     title: VITE_GLOB_APP_TITLE,
//     apiUrl: VITE_GLOB_API_URL,
//     shortName: VITE_GLOB_APP_SHORT_NAME,
//     urlPrefix: VITE_GLOB_API_URL_PREFIX,
//     uploadUrl: VITE_GLOB_UPLOAD_URL,
//   };
//   return glob as Readonly<GlobConfig>;
// };
