const puppeteer = require('puppeteer')
const moment = require('moment')

const email = process.env.EMAIL
const password = process.env.PASSWORD
const employeeId = process.env.EMPLOYEE_ID
;(async () => {
  console.log('Started...')

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()

  // トップページを表示
  await page.goto('https://accounts.secure.freee.co.jp/login/hr')

  // ログイン
  await page.type('input[name=email]', email)
  await page.type('input[name=password]', password)
  await page.click('input[name=commit]')

  // 次回給与支払い対象の勤怠ページへ遷移
  await page.goto(
    `https://p.secure.freee.co.jp/#work_records/${moment()
      .add(1, 'months')
      .format('YYYY/M')}/employees/${employeeId}`
  )
  await page.waitFor(5000)

  // 本日分をクリックして勤怠登録のモーダルを表示
  await page.click(`td[data-date="${moment().format('YYYY-MM-DD')}"]`)
  await page.waitForSelector('.work-record-edit-modal__footer')

  // 保存ボタンをクリック
  await page.click(
    'button[class="work-record-edit-modal__footer-control sw-button-primary"]'
  )

  await browser.close()
  console.log('Completed!')
})()
