define(["jquery","angular","underscore"],function($,angular,_){
    var app = angular.module('doortodoor24App', []);
    app.controller("doortodoorCtrl",function($scope){

        $scope.items = [
            {name:"장롱",checked:false},
            {name:"침대",checked:false},
            {name:"화장대",checked:false},
            {name:"전자레인지",checked:false},
            {name:"TV",checked:false},
            {name:"에어콘",checked:false},
            {name:"소파",checked:false},
            {name:"식탁",checked:false},
            {name:"냉장고",checked:false},
            {name:"가스렌지",checked:false},
            {name:"세탁기",checked:false},
            {name:"자전거",checked:false}
        ];



        $scope.update = function(){
            // 유효성 검사.
            var forms = ["place0","place1","date","name","tel"];
            var vaild = true;
            _.each(forms,function(id){
                if(!vaild){ return false; };
                $("#"+id+"Group").removeClass("has-error has-success");
                if(!$scope[id]){
                    $("#"+id+"Group").addClass("has-error");
                    $("#"+id).focus();
                    vaild = false;
                }else{
                    $("#"+id+"Group").addClass("has-success");
                };
            });
            if(!vaild) return false;

            if(!$scope.agree){
                alert("개인정보수집동의 해주세요.");
                return false;
            };

            var items = _.map(_.filter($scope.items,function(item){return item.checked }),function(item){return item.name});
            var data = {
                place0:$scope.place0,
                place1:$scope.place1,
                date:$scope.date,
                name:$scope.name,
                tel:$scope.tel,
                item:items.join(","),
                comment:$scope.comment
            };
            $.ajax({
                url: formUrl,
                data: data,
                type: "POST",
                success: function(response) {
                    alert("등록되었습니다.");
                    $("#contactForm form").get(0).reset();
                    $("#contactForm").find(".has-error, .has-success").removeClass("has-error has-success");
                    _.each(forms,function(id){
                        $scope[id] = null;
                    });
                    $("#contactForm").find("input , textarea").attr("disabled",false);
                }.bind(this),
                error: function(xhr, status, err) {

                }.bind(this),
                beforeSend: function(xhr){
                    $("#contactForm").find("input , textarea").attr("disabled",true);
                }
            });
        };
    });
});