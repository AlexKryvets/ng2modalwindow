import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, Host} from '@angular/core';
import {ModalContainerComponent} from '../src/modalcontainer.component';
import {ModalContainerService} from '../src/modalcontainer.service';

@Component({
    selector: 'test',
    template: '',
    providers: [ModalContainerService]
})
class TestComponent {
    constructor (@Host() service: ModalContainerService) {
        console.log(service)
    }
}

@Component({
    directives: [ModalContainerComponent, TestComponent],
    selector: 'my-app',
    template: '<modal-container></modal-container><test></test>',
    providers: [ModalContainerService]
})
class AppComponent {
    constructor (service: ModalContainerService) {
        console.log(service)
    }
}

bootstrap(AppComponent, []);