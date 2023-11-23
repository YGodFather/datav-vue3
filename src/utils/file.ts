export const downloadTextFile = (
  content: string,
  filename: number | string = Date.now(),
  fileSuffix?: string
) => {
  // 字符内容转变成blob地址
  const blob = new Blob([content]);
  downloadByATag(URL.createObjectURL(blob), filename, fileSuffix);
};

/**
 * * 通过 a 标签下载数据
 * @param url
 * @param filename
 * @param fileSuffix
 */
export const downloadByATag = (
  url: string,
  filename: number | string = Date.now(),
  fileSuffix?: string
) => {
  const ele = document.createElement('a'); // 创建下载链接
  ele.download = fileSuffix ? `${filename}.${fileSuffix}` : `${filename}`; //设置下载的名称
  ele.style.display = 'none'; // 隐藏的可下载链接
  // 字符内容转变成blob地址
  // url = url.replace(new RegExp(/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g), '')
  ele.href = url;
  // 绑定点击时间
  document.body.appendChild(ele);
  ele.click();
  // 然后移除
  document.body.removeChild(ele);
};

export const downloadBlob = (
  BlobFile: Blob,
  filename = `${Date.now()}`,
  fileSuffix?: string
) => {
  const url = window.URL.createObjectURL(new Blob([BlobFile]));
  downloadByATag(url, filename, fileSuffix);
};

/**
 * @description: 根据用户文件名称自动生成注册列表名称
 * @param {string} clientName
 * @param {string} clientPath
 * @return {*}
 */
export const downloadStartClientReg = (
  clientName: string,
  clientPath: string
): void => {
  // 重要需要做一层 \ 替换为 \\ 否则下载的reg 文件导入后不生效
  // c:\data\t => c:\\data\\t
  clientPath = clientPath.replace(/\\/g, '\\\\');
  const text = `Windows Registry Editor Version 5.00
  [HKEY_CLASSES_ROOT\\${clientName}]
  @="URL:${clientName}"
  "URL Protocol"=""
  [HKEY_CLASSES_ROOT\\${clientName}\\shell]
  [HKEY_CLASSES_ROOT\\${clientName}\\shell\\open]
  [HKEY_CLASSES_ROOT\\${clientName}\\shell\\open\\command]
  @="\\"${clientPath}\\" -l \\"%1\\""`;
  downloadTextFile(text, clientName, 'reg');
};
