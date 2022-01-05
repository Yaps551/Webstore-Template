import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { authDao } from "src/shared/services/auth-dao.service";
import { UserService } from "src/shared/services/user.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;

    constructor(private authDao: authDao, private userService: UserService) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm)
    {
        const userInfo = form.value;
        form.reset();

        this.authDao.login(userInfo.email, userInfo.password)
        .subscribe({
            next: response => {
                localStorage.setItem("LoggedIn", JSON.stringify(true));
                this.userService.updateLoginStatus();
            },
            error: err => console.log(err)
        });
    }

    //TODO REMOVE
    onQuickLogin() {
        this.authDao.login("test@test.com", "12345")
        .subscribe({
            next: response => {
                localStorage.setItem("LoggedIn", JSON.stringify(true));
                this.userService.updateLoginStatus();
            },
            error: err => console.log(err)
        });
    }
}