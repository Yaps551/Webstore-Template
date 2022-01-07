import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { authDao } from "src/shared/services/auth-dao.service";
import { UserService } from "src/shared/services/user.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode: boolean = true;
    notificationMessage: string = null;

    constructor(private authDao: authDao, private userService: UserService, private router: Router) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (this.isLoginMode) {
            this.performLogin(form);
            return;
        }

        this.performSignUp(form);
    }

    performSignUp(form: NgForm) {
        const userInfo = form.value;

        this.authDao.signup(userInfo.email, userInfo.password)
        .subscribe({
            next: response => this.notificationMessage = response.message, //TODO handle response types
            error: err => console.log(err),
            complete: () => form.reset()
        });
    }

    performLogin(form: NgForm) {
        const userInfo = form.value;

        this.authDao.login(userInfo.email, userInfo.password)
        .subscribe({
            next: response => {
                localStorage.setItem("LoggedIn", JSON.stringify(true));
                this.userService.updateLoginStatus();

                this.notificationMessage = response.message;
                //TODO handle response types
            },
            error: err => console.log(err),
            complete: () => form.reset()
        });
    }

    //TODO REMOVE
    onQuickLogin() {
        this.authDao.login("admin@test.com", "12345")
        .subscribe({
            next: response => {
                localStorage.setItem("LoggedIn", JSON.stringify(true));
                this.userService.updateLoginStatus();

                this.notificationMessage = response.message;

                // this.router.navigate(['/']);
            },
            error: err => console.log(err)
        });
    }
}