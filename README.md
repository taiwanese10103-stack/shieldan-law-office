# 盾安律師事務所｜GitHub Pages 網站

這是一份可部署到 GitHub Pages 的響應式靜態網站，包含首頁、事務所介紹、服務領域、服務理念、團隊、法律觀點與聯絡表單。

## 專案檔案

- `index.html`：網站內容與頁面結構
- `styles.css`：版面、色彩、字體與手機版排版
- `script.js`：手機選單、年份與表單互動

## 一、建立 GitHub Repository

1. 登入 https://github.com/
2. 右上角按 `+` → `New repository`。
3. Repository name 可輸入 `shieldan-law-office`。
4. 選擇 `Public`。
5. 勾選 `Add a README file` 可不勾（本資料夾已有 README）。
6. 按 `Create repository`。

## 二、上傳網站檔案

1. 進入剛建立的 repository。
2. 點 `Add file` → `Upload files`。
3. 將 `index.html`、`styles.css`、`script.js`、`README.md` 拖曳到頁面。
4. 按 `Commit changes`。
5. 確認這四個檔案位於 repository 最外層（根目錄），不要放進額外的資料夾。

## 三、啟用 GitHub Pages

1. 進入 repository 的 `Settings`。
2. 左側選單選 `Pages`。
3. 在 `Build and deployment` 的 `Source` 選 `Deploy from a branch`。
4. Branch 選 `main`，資料夾選 `/(root)`。
5. 按 `Save`。
6. 等待 GitHub 建置完成，回到 `Settings` → `Pages`，頁面會顯示網站網址，通常格式為：
   `https://你的GitHub帳號.github.io/shieldan-law-office/`

## 四、上線前一定要修改的資料

請先確認以下示意資訊，不能直接當成真實律師事務所資訊使用：

- 律師姓名、照片、學經歷、律師證書及執業資訊
- 正式電話、電子郵件、地址、服務時間
- 實際承辦的法律領域
- 隱私權政策與個資蒐集告知事項
- 文章內容及法律資訊的正確性

### 修改聯絡方式

1. 用 GitHub 點開 `index.html`，按鉛筆圖示（Edit）。
2. 搜尋「請填入正式聯絡電話」、「請填入正式電子郵件」、「請填入事務所地址」，替換成正確資料。
3. 打開 `script.js`，將 `contact@example.com` 改成正式收件信箱。
4. 按 `Commit changes`。GitHub Pages 會自動重新部署。

## 五、表單功能說明

目前表單會檢查必填欄位與同意勾選，並以使用者的郵件軟體建立郵件草稿（mailto）。它不是安全的線上案件管理系統，也不會把資料直接儲存到伺服器。正式營運建議使用具備個資告知、權限控管及安全傳輸的表單服務或自建後端，並先完成隱私權及資安評估。

## 六、重要提醒

本網站是品牌與版型示範，並非對任何真實律師或律師事務所的介紹。網站中的服務項目、團隊文字及聯絡資訊均須由實際經營者確認。網站資訊不構成法律意見、律師委任或保證結果。

## 七、更新網站

修改 GitHub repository 中的檔案並按 `Commit changes` 即可。GitHub Pages 通常會在數分鐘內自動更新。
