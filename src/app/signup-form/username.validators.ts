import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidator {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0) {
            return {cannotContainSpace: true};
        }
        else {
            return null;
        }
    }

    static shouldBeUnique(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string) === 'osama12') {
            return {shouldBeUnique: true};
        } else {
            return null
        }
    }

    static asyncUnique(control: AbstractControl) : Promise <ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((control.value as string) === 'osama12') {
                    resolve({shouldBeUnique: true});
                } else {
                    resolve(null);
                }
            }, 2000);
        }) 
    }
}