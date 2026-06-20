import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  private readonly userInput = this.page.locator("input[name='email']");
  private readonly pswInput = this.page.locator("input[name='password']");
  private readonly logInButton = this.page.getByRole('button', { name: 'Login' });

  async login(user: string, pass: string) {
    await this.userInput.fill(user);
    await this.pswInput.fill(pass);
    await this.logInButton.click();
  }
}