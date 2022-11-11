(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+vkc":
/*!************************************************************************************!*\
  !*** ./src/app/components/modals/sticky-note-modal/sticky-note-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: StickyNoteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyNoteModalComponent", function() { return StickyNoteModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class StickyNoteModalComponent {
    constructor() { }
    ngOnInit() { }
}
StickyNoteModalComponent.ɵfac = function StickyNoteModalComponent_Factory(t) { return new (t || StickyNoteModalComponent)(); };
StickyNoteModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StickyNoteModalComponent, selectors: [["app-sticky-note-modal"]], inputs: { stickyNote: "stickyNote" }, decls: 22, vars: 9, consts: [["id", "stickyNoteModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "card-subtitle", "mb-2"], [1, "mr-2"], [1, "modal-footer"], [1, "btn-group"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"]], template: function StickyNoteModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Topic:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.stickyNote.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stickyNote.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.stickyNote.topic, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.stickyNote.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 6, ctx.stickyNote.date, "short"), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".modal-content[_ngcontent-%COMP%] {\n  border-radius: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvc3RpY2t5LW5vdGUtbW9kYWwvc3RpY2t5LW5vdGUtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL3N0aWNreS1ub3RlLW1vZGFsL3N0aWNreS1ub3RlLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StickyNoteModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sticky-note-modal',
                templateUrl: './sticky-note-modal.component.html',
                styleUrls: ['./sticky-note-modal.component.css']
            }]
    }], function () { return []; }, { stickyNote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ishubhamrathi/Documents/vsCode/StickyNotesApp/src/main.ts */"zUnb");


/***/ }),

/***/ "4Q41":
/*!**************************************************!*\
  !*** ./src/app/pipes/topic/filter-topic.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterTopicPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTopicPipe", function() { return FilterTopicPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterTopicPipe {
    transform(stickyNotes, topic) {
        if (topic === undefined || topic === "")
            return stickyNotes;
        return stickyNotes.filter(stickyNote => stickyNote.topic.startsWith(topic));
    }
}
FilterTopicPipe.ɵfac = function FilterTopicPipe_Factory(t) { return new (t || FilterTopicPipe)(); };
FilterTopicPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterTopic", type: FilterTopicPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterTopicPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filterTopic'
            }]
    }], null, null); })();


/***/ }),

/***/ "5hgM":
/*!********************************************************!*\
  !*** ./src/app/components/home/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_sticky_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/sticky-note.service */ "reDV");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter/filter.component */ "NnUs");
/* harmony import */ var _footer_btn_footer_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer-btn/footer-btn.component */ "vKqP");





class HomeComponent {
    constructor(stickyNoteService) {
        this.stickyNoteService = stickyNoteService;
    }
    ngOnInit() {
        this.stickyNotes = this.stickyNoteService.getAllStickyNotes();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sticky_note_service__WEBPACK_IMPORTED_MODULE_1__["StickyNotesService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 1, consts: [[3, "stickyNotes"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-filter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer-btn");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyNotes", ctx.stickyNotes);
    } }, directives: [_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"], _footer_btn_footer_btn_component__WEBPACK_IMPORTED_MODULE_3__["FooterBtnComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_services_sticky_note_service__WEBPACK_IMPORTED_MODULE_1__["StickyNotesService"] }]; }, null); })();


/***/ }),

/***/ "8JWB":
/*!********************************************************!*\
  !*** ./src/app/components/form/form/form.component.ts ***!
  \********************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_sticky_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/sticky-note */ "AVV/");
/* harmony import */ var _functions_getColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../functions/getColor */ "t4ur");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_sticky_note_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sticky-note.service */ "reDV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inputs/inputs.component */ "bvQz");
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dropdown/dropdown.component */ "Vriv");









class FormComponent {
    constructor(router, activatedRoute, stickyNoteService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.stickyNoteService = stickyNoteService;
        this.stickyNote = new src_app_model_sticky_note__WEBPACK_IMPORTED_MODULE_1__["StickyNote"](0, "", "", "", "");
        this.submitted = false;
        this.edittingForm = false;
    }
    ngOnInit() {
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        if (!isNaN(id)) {
            this.edittingForm = true;
            const fetchedStickyNote = this.stickyNoteService.getStickyNote(id);
            this.stickyNote.title = fetchedStickyNote.title;
            this.stickyNote.topic = fetchedStickyNote.topic;
            this.stickyNote.description = fetchedStickyNote.description;
            this.stickyNote.color = Object(_functions_getColor__WEBPACK_IMPORTED_MODULE_2__["getColor"])(fetchedStickyNote.color);
            this.stickyNote.id = id;
        }
    }
    save() {
        if (this.stickyNote.color !== undefined) {
            this.submitted = false;
            this.stickyNote.date = Date.now();
            this.stickyNote.color = Object(_functions_getColor__WEBPACK_IMPORTED_MODULE_2__["getColor"])(this.stickyNote.color);
            if (this.edittingForm) {
                this.stickyNoteService.editStickyNote(this.stickyNote);
                this.edittingForm = false;
            }
            else {
                this.stickyNoteService.addStickyNote(this.stickyNote);
            }
            this.router.navigate(['']);
        }
        else {
            this.submitted = true;
        }
    }
    cancel() {
        this.router.navigate(['']);
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sticky_note_service__WEBPACK_IMPORTED_MODULE_4__["StickyNotesService"])); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 12, vars: 3, consts: [[1, "container"], [1, "text-center", "mb-4", "text-light"], [3, "stickyNote"], [3, "stickyNote", "submitted"], [1, "row", "justify-content-center", "mt-4"], [1, "col-lg-3", "col-md-4", "col-11", "mb-3"], [1, "btn", "btn-block", "btn-success", "text-dark", 3, "click"], [1, "btn", "btn-block", "btn-danger", 3, "click"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Note's Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-inputs", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-dropdown", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_button_click_7_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_button_click_10_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyNote", ctx.stickyNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyNote", ctx.stickyNote)("submitted", ctx.submitted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_6__["InputsComponent"], _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["DropdownComponent"]], styles: ["h2[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_sticky_note_service__WEBPACK_IMPORTED_MODULE_4__["StickyNotesService"] }]; }, null); })();


/***/ }),

/***/ "AVV/":
/*!**************************************!*\
  !*** ./src/app/model/sticky-note.ts ***!
  \**************************************/
/*! exports provided: StickyNote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyNote", function() { return StickyNote; });
class StickyNote {
    constructor(id, title, topic, description, color) { }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "NnUs":
/*!************************************************************!*\
  !*** ./src/app/components/home/filter/filter.component.ts ***!
  \************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sticky_note_list_sticky_note_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sticky-note-list/sticky-note-list.component */ "zKGg");





function FilterComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](color_r1);
} }
class FilterComponent {
    constructor() {
        this.colors = ["blue", "gray", "green", "red", "yellow", "turquoise", "black", "white"];
    }
    ngOnInit() { }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(); };
FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], inputs: { stickyNotes: "stickyNotes" }, decls: 17, vars: 6, consts: [[1, "container"], [1, "row"], [1, "col-md-6"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text", "text-white"], ["type", "text", "placeholder", "topic", "name", "topic", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "color", 1, "custom-select", "custom-border", 3, "ngModel", "ngModelChange"], ["selected", ""], [4, "ngFor", "ngForOf"], [3, "stickyNotes", "colorSelected", "topicSelected"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_7_listener($event) { return ctx.topicSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Filter Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_select_ngModelChange_13_listener($event) { return ctx.colorSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FilterComponent_option_15_Template, 2, 1, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-sticky-note-list", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.topicSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.colorSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyNotes", ctx.stickyNotes)("colorSelected", ctx.colorSelected)("topicSelected", ctx.topicSelected);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _sticky_note_list_sticky_note_list_component__WEBPACK_IMPORTED_MODULE_3__["StickyNoteListComponent"]], styles: ["label[_ngcontent-%COMP%] {\n  color: rgb(170, 48, 48);\n  font-weight: 600;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  background-color: rgb(248, 248, 248);\n  color: black;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  background-color: rgba(31,134,252, 0.15);\n  color: black;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: rgb(192, 192, 192);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICBjb2xvcjogcmdiKDE3MCwgNDgsIDQ4KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW5wdXQsXG5zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLDEzNCwyNTIsIDAuMTUpO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.css']
            }]
    }], function () { return []; }, { stickyNotes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'sticky-notes';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Vriv":
/*!****************************************************************!*\
  !*** ./src/app/components/form/dropdown/dropdown.component.ts ***!
  \****************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function DropdownComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](color_r2);
} }
function DropdownComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Must select a color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DropdownComponent {
    constructor() {
        this.colors = ["blue", "gray", "green", "red", "yellow", "turquoise", "white"];
    }
    ngOnInit() { }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(); };
DropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownComponent, selectors: [["app-dropdown"]], inputs: { stickyNote: "stickyNote", submitted: "submitted" }, decls: 11, vars: 3, consts: [[1, "row", "justify-content-center", "mt-4"], [1, "input-group", "mb-3", "col-md-6", "col-lg-4", "col-11"], [1, "input-group-prepend"], ["for", "colors", 1, "input-group-text", "bg-dark", "text-light"], ["id", "colors", "name", "colors", 1, "custom-select", 3, "ngModel", "ngModelChange"], ["disabled", ""], [4, "ngFor", "ngForOf"], [1, "row", "justify-content-center", "mt-1"], ["class", "alert alert-danger col-md-6 col-lg-4 col-11", 4, "ngIf"], [1, "alert", "alert-danger", "col-md-6", "col-lg-4", "col-11"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DropdownComponent_Template_select_ngModelChange_5_listener($event) { return ctx.stickyNote.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "select below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DropdownComponent_option_8_Template, 2, 1, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DropdownComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stickyNote.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stickyNote.color === undefined && ctx.submitted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: rgb(63, 63, 63);\n\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n  font-weight: 600;\n  \n  background: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);\n\n}\n\n#colors[_ngcontent-%COMP%] {\n  \n  background: white;\n  color: rgb(63, 63, 63);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7O0FBRXhCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQjs7Ozs7TUFLSTtFQUNKLDZEQUE2RDs7QUFFL0Q7O0FBSUE7RUFDRSx1Q0FBdUM7RUFDdkMsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0IG9wdGlvbiB7XG4gIGNvbG9yOiByZ2IoNjMsIDYzLCA2Myk7XG5cbn1cblxubGFiZWwge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBmb250LXdlaWdodDogNjAwO1xuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgOTBkZWcsXG4gICAgIzQxNThEMCAwJSxcbiAgICAjQzg1MEMwIDQwJSxcbiAgICAjRkZDQzcwIDEwMCVcbiAgKTsgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgIzAwOTNFOSAwJSwgIzgwRDBDNyAxMDAlKTtcblxufVxuXG5cblxuI2NvbG9ycyB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTQsIDY2KTsgKi9cbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2IoNjMsIDYzLCA2Myk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dropdown',
                templateUrl: './dropdown.component.html',
                styleUrls: ['./dropdown.component.css']
            }]
    }], function () { return []; }, { stickyNote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "YB+U":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/sticky-note/sticky-note.component.ts ***!
  \**********************************************************************/
/*! exports provided: StickyNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyNoteComponent", function() { return StickyNoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_sticky_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/sticky-note.service */ "reDV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class StickyNoteComponent {
    constructor(stickyNoteService, router) {
        this.stickyNoteService = stickyNoteService;
        this.router = router;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    edit(id) {
        this.router.navigate(['note', id]);
    }
    delete(id) {
        this.stickyNoteService.deleteStickyNote(id.toString());
    }
    openModal() {
        this.childEvent.emit(this.stickyNote);
    }
}
StickyNoteComponent.ɵfac = function StickyNoteComponent_Factory(t) { return new (t || StickyNoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sticky_note_service__WEBPACK_IMPORTED_MODULE_1__["StickyNotesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StickyNoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StickyNoteComponent, selectors: [["app-sticky-note"]], inputs: { stickyNote: "stickyNote" }, outputs: { childEvent: "childEvent" }, decls: 25, vars: 21, consts: [["data-toggle", "modal", "data-target", "#stickyNoteModal", 1, "card"], [3, "click"], [1, "card-header", "mb-1"], [1, "card-title", "text-center"], [1, "card-body"], [1, "card-subtitle", "mb-2"], [1, "mr-2"], [1, "card-text"], [1, "card-footer"], [1, "btn-group", "mt-2"], [1, "btn", "btn-sm", "btn-light", "text-dark", 3, "click"], [1, "btn", "btn-sm", "btn-light", 3, "click"]], template: function StickyNoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StickyNoteComponent_Template_div_click_1_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Topic:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StickyNoteComponent_Template_button_click_21_listener() { return ctx.edit(ctx.stickyNote.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StickyNoteComponent_Template_button_click_23_listener() { return ctx.delete(ctx.stickyNote.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.stickyNote.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 6, ctx.stickyNote.title, 0, 20));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 10, ctx.stickyNote.topic, 0, 20), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](15, 14, ctx.stickyNote.description, 0, 200));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 18, ctx.stickyNote.date, "short"), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 45px;\n}\n\nhr[_ngcontent-%COMP%] {\n  border-top: 1px solid #8c8b8b;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 5%;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-family: cursive;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0aWNreS1ub3RlL3N0aWNreS1ub3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0aWNreS1ub3RlL3N0aWNreS1ub3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWdyb3VwIGJ1dHRvbiB7XG4gIGhlaWdodDogNDVweDtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzhjOGI4Yjtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StickyNoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sticky-note',
                templateUrl: './sticky-note.component.html',
                styleUrls: ['./sticky-note.component.css']
            }]
    }], function () { return [{ type: src_app_services_sticky_note_service__WEBPACK_IMPORTED_MODULE_1__["StickyNotesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { stickyNote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], childEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_form_form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/form/form/form.component */ "8JWB");
/* harmony import */ var _components_home_footer_btn_footer_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/footer-btn/footer-btn.component */ "vKqP");
/* harmony import */ var _components_form_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/form/dropdown/dropdown.component */ "Vriv");
/* harmony import */ var _components_form_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/form/inputs/inputs.component */ "bvQz");
/* harmony import */ var _components_home_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home/home.component */ "5hgM");
/* harmony import */ var _components_home_sticky_note_list_sticky_note_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/sticky-note-list/sticky-note-list.component */ "zKGg");
/* harmony import */ var _components_home_sticky_note_sticky_note_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/sticky-note/sticky-note.component */ "YB+U");
/* harmony import */ var _components_home_filter_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/filter/filter.component */ "NnUs");
/* harmony import */ var _pipes_color_filter_color_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/color/filter-color.pipe */ "tOlh");
/* harmony import */ var _pipes_topic_filter_topic_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/topic/filter-topic.pipe */ "4Q41");
/* harmony import */ var _components_modals_sticky_note_modal_sticky_note_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/modals/sticky-note-modal/sticky-note-modal.component */ "+vkc");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_form_form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"],
        _components_home_footer_btn_footer_btn_component__WEBPACK_IMPORTED_MODULE_7__["FooterBtnComponent"],
        _components_form_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["DropdownComponent"],
        _components_form_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_9__["InputsComponent"],
        _components_home_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _components_home_sticky_note_list_sticky_note_list_component__WEBPACK_IMPORTED_MODULE_11__["StickyNoteListComponent"],
        _components_home_sticky_note_sticky_note_component__WEBPACK_IMPORTED_MODULE_12__["StickyNoteComponent"],
        _components_home_filter_filter_component__WEBPACK_IMPORTED_MODULE_13__["FilterComponent"],
        _pipes_color_filter_color_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterColorPipe"],
        _pipes_topic_filter_topic_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterTopicPipe"],
        _components_modals_sticky_note_modal_sticky_note_modal_component__WEBPACK_IMPORTED_MODULE_16__["StickyNoteModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _components_form_form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"],
                    _components_home_footer_btn_footer_btn_component__WEBPACK_IMPORTED_MODULE_7__["FooterBtnComponent"],
                    _components_form_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["DropdownComponent"],
                    _components_form_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_9__["InputsComponent"],
                    _components_home_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _components_home_sticky_note_list_sticky_note_list_component__WEBPACK_IMPORTED_MODULE_11__["StickyNoteListComponent"],
                    _components_home_sticky_note_sticky_note_component__WEBPACK_IMPORTED_MODULE_12__["StickyNoteComponent"],
                    _components_home_filter_filter_component__WEBPACK_IMPORTED_MODULE_13__["FilterComponent"],
                    _pipes_color_filter_color_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterColorPipe"],
                    _pipes_topic_filter_topic_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterTopicPipe"],
                    _components_modals_sticky_note_modal_sticky_note_modal_component__WEBPACK_IMPORTED_MODULE_16__["StickyNoteModalComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bvQz":
/*!************************************************************!*\
  !*** ./src/app/components/form/inputs/inputs.component.ts ***!
  \************************************************************/
/*! exports provided: InputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsComponent", function() { return InputsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class InputsComponent {
    constructor() { }
    ngOnInit() { }
}
InputsComponent.ɵfac = function InputsComponent_Factory(t) { return new (t || InputsComponent)(); };
InputsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputsComponent, selectors: [["app-inputs"]], inputs: { stickyNote: "stickyNote" }, decls: 9, vars: 3, consts: [[1, "row"], [1, "col-lg-7", "col-md-9", "col-11"], ["type", "text", "placeholder", "Title", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Topic", "name", "topic", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "10", "placeholder", "Description", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"]], template: function InputsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputsComponent_Template_input_ngModelChange_2_listener($event) { return ctx.stickyNote.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputsComponent_Template_input_ngModelChange_5_listener($event) { return ctx.stickyNote.topic = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputsComponent_Template_textarea_ngModelChange_8_listener($event) { return ctx.stickyNote.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stickyNote.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stickyNote.topic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stickyNote.description);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".row[_ngcontent-%COMP%] {\n  justify-content: center;\n  margin-top: 28px;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  background: rgba(0,0,0,0.05);\n  border: 3px solid;\n  \n  \n  border: none;\n  border-radius: 20px;\n  color: black;\n  \n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline-width: 0;\n  background: rgba(31,134,252, 0.15);\n  transition: ease-in 0.2s;\n  color: black;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  color: rgb(177, 177, 177);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtL2lucHV0cy9pbnB1dHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQiw0RUFBNEU7RUFDNUUsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTs7QUFFZDs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtL2lucHV0cy9pbnB1dHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XG4gIGJvcmRlcjogM3B4IHNvbGlkO1xuICAvKiBib3JkZXItaW1hZ2Utc291cmNlOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjMDA5M0U5IDAlLCAjODBEMEM3IDEwMCUpOyAqL1xuICAvKiBib3JkZXItaW1hZ2Utc2xpY2U6IDE7ICovXG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBcbn1cblxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmUtd2lkdGg6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzEsMTM0LDI1MiwgMC4xNSk7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inputs',
                templateUrl: './inputs.component.html',
                styleUrls: ['./inputs.component.css']
            }]
    }], function () { return []; }, { stickyNote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavbarComponent {
    constructor() { }
    ngOnInit() { }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 3, vars: 0, consts: [[1, "navbar", "justify-content-center", "mb-4"], [1, "display-4"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sticky Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navbar[_ngcontent-%COMP%] {\n  height: 110px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Righteous\", cursive;\n  color: rgb(255, 255, 255);\n}\n\n@media only screen and (max-width: 450px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 44px;\n  }\n\n  .navbar[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICBoZWlnaHQ6IDExMHB4O1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiLCBjdXJzaXZlO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gIH1cblxuICAubmF2YmFyIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "reDV":
/*!*************************************************!*\
  !*** ./src/app/services/sticky-note.service.ts ***!
  \*************************************************/
/*! exports provided: StickyNotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyNotesService", function() { return StickyNotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StickyNotesService {
    constructor() {
        this.id = 0;
        this.stickyNotes = [];
        let i = 0;
        for (let key in localStorage) {
            if (i++ === localStorage.length)
                break;
            this.stickyNotes.push(this.getStickyNote(parseInt(key)));
            this.id = Math.max(this.id, parseInt(key));
        }
        this.stickyNotes.sort((a, b) => b.date - a.date);
    }
    getStickyNote(id) {
        return JSON.parse(localStorage.getItem(id.toString()));
    }
    getAllStickyNotes() {
        return this.stickyNotes;
    }
    addStickyNote(stickyNote) {
        stickyNote.id = ++this.id;
        localStorage.setItem(this.id.toString(), JSON.stringify(stickyNote));
        this.stickyNotes.unshift(stickyNote);
    }
    deleteStickyNote(id) {
        this.removeStickyNoteFromArray(parseInt(id));
        localStorage.removeItem(id);
    }
    removeStickyNoteFromArray(id) {
        for (let i = 0; i < this.stickyNotes.length; i++) {
            if (this.stickyNotes[i].id === id) {
                this.stickyNotes.splice(i, 1);
            }
        }
    }
    editStickyNote(updatedStickyNote) {
        localStorage.removeItem(updatedStickyNote.id.toString());
        localStorage.setItem(updatedStickyNote.id.toString(), JSON.stringify(updatedStickyNote));
        this.removeStickyNoteFromArray(updatedStickyNote.id);
        this.stickyNotes.unshift(updatedStickyNote);
    }
}
StickyNotesService.ɵfac = function StickyNotesService_Factory(t) { return new (t || StickyNotesService)(); };
StickyNotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StickyNotesService, factory: StickyNotesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StickyNotesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "t4ur":
/*!***************************************!*\
  !*** ./src/app/functions/getColor.ts ***!
  \***************************************/
/*! exports provided: getColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return getColor; });
function getColor(color) {
    const colors = {
        // blue: "bg-primary",
        // gray: "bg-secondary",
        // green: "bg-success", 
        // red: "bg-danger", 
        // yellow: "bg-warning", 
        // turquoise: "bg-info",
        // black: "bg-dark", 
        // white: "bg-light"
        blue: "bg-blue",
        gray: "bg-gray",
        green: "bg-green",
        red: "bg-red",
        yellow: "bg-yellow",
        turquoise: "bg-turquoise",
        // black: "bg-black", 
        white: "bg-white"
    };
    for (let key in colors) {
        if (key === color)
            return colors[key];
        if (colors[key] === color)
            return key;
    }
}


/***/ }),

/***/ "tOlh":
/*!**************************************************!*\
  !*** ./src/app/pipes/color/filter-color.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterColorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterColorPipe", function() { return FilterColorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _functions_getColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/getColor */ "t4ur");



class FilterColorPipe {
    transform(stickyNotes, color) {
        if (color === undefined || color === "")
            return stickyNotes;
        return stickyNotes.filter(stickyNote => stickyNote.color === Object(_functions_getColor__WEBPACK_IMPORTED_MODULE_1__["getColor"])(color));
    }
}
FilterColorPipe.ɵfac = function FilterColorPipe_Factory(t) { return new (t || FilterColorPipe)(); };
FilterColorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterColor", type: FilterColorPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterColorPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filterColor'
            }]
    }], null, null); })();


/***/ }),

/***/ "vKqP":
/*!********************************************************************!*\
  !*** ./src/app/components/home/footer-btn/footer-btn.component.ts ***!
  \********************************************************************/
/*! exports provided: FooterBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBtnComponent", function() { return FooterBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/note"]; };
class FooterBtnComponent {
    constructor() { }
    ngOnInit() { }
}
FooterBtnComponent.ɵfac = function FooterBtnComponent_Factory(t) { return new (t || FooterBtnComponent)(); };
FooterBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterBtnComponent, selectors: [["app-footer-btn"]], decls: 2, vars: 2, consts: [["id", "ftr-btn", 1, "btn", "btn-primary", 3, "routerLink"]], template: function FooterBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Sticky Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  margin-bottom: 30px;\n  height: 55px;\n  width: 65vw;\n  transform: translateX(-50%);\n  font-weight: 600;\n}\n\n#ftr-btn[_ngcontent-%COMP%]{\n  background:linear-gradient(160deg, #0093E9 0%, #80D0C7 100%); ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2Zvb3Rlci1idG4vZm9vdGVyLWJ0bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDREQUE0RDtBQUM5RCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9mb290ZXItYnRuL2Zvb3Rlci1idG4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgd2lkdGg6IDY1dnc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI2Z0ci1idG57XG4gIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE2MGRlZywgIzAwOTNFOSAwJSwgIzgwRDBDNyAxMDAlKTsgO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-btn',
                templateUrl: './footer-btn.component.html',
                styleUrls: ['./footer-btn.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home/home.component */ "5hgM");
/* harmony import */ var _components_form_form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form/form/form.component */ "8JWB");






const routes = [
    { path: '', component: _components_home_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'note', component: _components_form_form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] },
    { path: 'note/:id', component: _components_form_form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zKGg":
/*!********************************************************************************!*\
  !*** ./src/app/components/home/sticky-note-list/sticky-note-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: StickyNoteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyNoteListComponent", function() { return StickyNoteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sticky_note_sticky_note_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sticky-note/sticky-note.component */ "YB+U");
/* harmony import */ var _modals_sticky_note_modal_sticky_note_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modals/sticky-note-modal/sticky-note-modal.component */ "+vkc");
/* harmony import */ var _pipes_topic_filter_topic_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/topic/filter-topic.pipe */ "4Q41");
/* harmony import */ var _pipes_color_filter_color_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/color/filter-color.pipe */ "tOlh");







function StickyNoteListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-sticky-note", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childEvent", function StickyNoteListComponent_div_2_Template_app_sticky_note_childEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.passedStickyNote($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stickyNote_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyNote", stickyNote_r2);
} }
function StickyNoteListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sticky-note-modal", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyNote", ctx_r1.stickyNote);
} }
class StickyNoteListComponent {
    constructor() { }
    ngOnInit() { }
    passedStickyNote(stickyNote) {
        this.stickyNote = stickyNote;
    }
}
StickyNoteListComponent.ɵfac = function StickyNoteListComponent_Factory(t) { return new (t || StickyNoteListComponent)(); };
StickyNoteListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StickyNoteListComponent, selectors: [["app-sticky-note-list"]], inputs: { stickyNotes: "stickyNotes", colorSelected: "colorSelected", topicSelected: "topicSelected" }, decls: 6, vars: 8, consts: [[1, "container"], [1, "row"], ["class", "col-xl-4 col-md-6 mt-4", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-xl-4", "col-md-6", "mt-4"], [3, "stickyNote", "childEvent"], [3, "stickyNote"]], template: function StickyNoteListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StickyNoteListComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "filterTopic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "filterColor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StickyNoteListComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, ctx.stickyNotes, ctx.colorSelected), ctx.topicSelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.stickyNote);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _sticky_note_sticky_note_component__WEBPACK_IMPORTED_MODULE_2__["StickyNoteComponent"], _modals_sticky_note_modal_sticky_note_modal_component__WEBPACK_IMPORTED_MODULE_3__["StickyNoteModalComponent"]], pipes: [_pipes_topic_filter_topic_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterTopicPipe"], _pipes_color_filter_color_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterColorPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-bottom: 13vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0aWNreS1ub3RlLWxpc3Qvc3RpY2t5LW5vdGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0aWNreS1ub3RlLWxpc3Qvc3RpY2t5LW5vdGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEzdmg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StickyNoteListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sticky-note-list',
                templateUrl: './sticky-note-list.component.html',
                styleUrls: ['./sticky-note-list.component.css']
            }]
    }], function () { return []; }, { stickyNotes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colorSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], topicSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map