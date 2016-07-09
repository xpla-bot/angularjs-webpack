import IAttributes = angular.IAttributes;
import IScope = angular.IScope;
import INgModelController = angular.INgModelController;

export function fullNameDirective () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link ($scope: IScope, $element: JQuery, $attrs: IAttributes, $ngModelCtrl: INgModelController) {
            $ngModelCtrl.$validators['fullName'] = (modelValue: string, viewValue: string): boolean => {
                function checkPart (part: string): boolean {
                    return part[0].toLocaleUpperCase() == part[0];
                }

                if ($ngModelCtrl.$isEmpty(modelValue)) {
                    return true;
                }

                return modelValue.split(' ').reduce((result, part) => {
                    return result && checkPart(part);
                }, true);
            };
        }
    };
}