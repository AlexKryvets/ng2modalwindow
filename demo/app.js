System.register(['@angular/platform-browser-dynamic', '@angular/core', '../src/modalcontainer.component', '../src/modalcontainer.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var platform_browser_dynamic_1, core_1, modalcontainer_component_1, modalcontainer_service_1;
    var TestComponent, AppComponent;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (modalcontainer_component_1_1) {
                modalcontainer_component_1 = modalcontainer_component_1_1;
            },
            function (modalcontainer_service_1_1) {
                modalcontainer_service_1 = modalcontainer_service_1_1;
            }],
        execute: function() {
            TestComponent = (function () {
                function TestComponent(service) {
                    console.log(service);
                }
                TestComponent = __decorate([
                    core_1.Component({
                        selector: 'test',
                        template: '',
                        providers: [modalcontainer_service_1.ModalContainerService]
                    }),
                    __param(0, core_1.Host()), 
                    __metadata('design:paramtypes', [modalcontainer_service_1.ModalContainerService])
                ], TestComponent);
                return TestComponent;
            }());
            AppComponent = (function () {
                function AppComponent(service) {
                    console.log(service);
                }
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [modalcontainer_component_1.ModalContainerComponent, TestComponent],
                        selector: 'my-app',
                        template: '<modal-container></modal-container><test></test>',
                        providers: [modalcontainer_service_1.ModalContainerService]
                    }), 
                    __metadata('design:paramtypes', [modalcontainer_service_1.ModalContainerService])
                ], AppComponent);
                return AppComponent;
            }());
            platform_browser_dynamic_1.bootstrap(AppComponent, []);
        }
    }
});
