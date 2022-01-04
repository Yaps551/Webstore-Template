import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { authDao } from "src/shared/services/auth-dao.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;

    constructor(private authDao: authDao) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm)
    {
        const userInfo = form.value;
        form.reset();

        this.authDao.login(userInfo.email, userInfo.password)
        .subscribe({
            next: response => console.log(response),
            error: err => console.log(err)
        });
    }
}