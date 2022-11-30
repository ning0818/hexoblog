export const replaceHTMLHref = (html) => {
  const yuanning0818Reg = /https:\/\/yuanning0818.tk/g; 
  const yuanning0818SignReg = /NING_URL/g; 
  const urlReg =
    /((http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*(?!yuanning0818.tk)[\w\-\@?^=%&/~\+#])?)/g; 
  const result = html
    .replace(yuanning0818Reg, "NING_URL")
    .replace(urlReg, "https://link.yuanning0818.tk/?url=$1")
    .replace(yuanning0818SignReg, "https://yuanning0818.tk");
  return result;
};
