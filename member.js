function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/member.html',
        controller: 'SkillsMebmberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}