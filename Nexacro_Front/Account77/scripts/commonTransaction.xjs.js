//XJS=commonTransaction.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /********************************************************************************
         공통 트랜잭션관리
         @Path           scripts::commonTransaction.xjs
         @Description    서비스ID 입력으로 트랜잭션 수행
         ********************************************************************************/

        this.gfnService = function (serviceID, bAsync)
        {
        	var serviceRow = this.dsService.findRow("serviceID", serviceID);
        	var serviceURL = this.dsService.getColumn(serviceRow, "URL");
        	var servicereqData = this.dsService.getColumn(serviceRow, "reqData");
        	var serviceresData = this.dsService.getColumn(serviceRow, "resData");
        	var serviceArgument = this.dsService.getColumn(serviceRow, "argument");
        	var serviceCallbackFunc = this.dsService.getColumn(serviceRow, "callbackFunc");
        	var serviceAsync = bAsync;

        	if (serviceRow < 0)
        	{
        		alert("서비스 ID가 없습니다.");
        	}
        	else if (typeof serviceURL == "undefined" || serviceURL == "")
        	{
        		alert("서비스 URL이 없습니다.");
        	}

        	if (typeof servicereqData == "undefined" || servicereqData == "")
        	{
        		servicereqData = null;
        	}

        	if (typeof serviceresData == "undefined" || serviceresData == "")
        	{
        		serviceresData = null;
        	}

        	if (typeof serviceArgument == "undefined" || serviceArgument == "")
        	{
        		serviceArgument = null;
        	}

        	if (typeof serviceCallbackFunc == "undefined" || serviceCallbackFunc == "")
        	{
        		serviceCallbackFunc = "gfnCallbackFunc";
        	}

        	// 트랜잭션 실행시 bAsync값에 따라서 동기화 & 비동기 설정가능
        	// 2번째 파라미터로 아무것도 안주면 기본값으로 true 설정하고 비동기 트랜잭션 설정
        	if (typeof bAsync != "boolean")
        	{
        		serviceAsync = true;
        	}
        	else if (bAsync != true)
        	{
        		serviceAsync = false;
        	}
        	else
        	{
        		serviceAsync = true;
        	}

        	// 트랜잭션 실행
        	this.transaction(
        		serviceID,
        		serviceURL,
        		servicereqData,
        		serviceresData,
        		serviceArgument,
        		serviceCallbackFunc,
        		bAsync
        	);

        	// LOG 출력
        	var log = "\n";
        	log += "serviceID : " + serviceID + "\n";
        	log += "URL       : " + serviceURL + "\n";
        	log += "reqData    : " + servicereqData + "\n";
        	log += "resData   : " + serviceresData + "\n";
        	log += "Argument  : " + serviceArgument + "\n";
        	log += "callback  : " + serviceCallbackFunc + "\n";
        	log += "bAsync    : " + bAsync + "\n";
        	trace(log);
        };

        this.ErrorCode = 1;
        this.ErrorMsg = "";
        this.message = "";

        this.gfnCallbackFunc = function (svcID, ErrorCode, ErrorMsg)
        {
        	if (ErrorCode < 1 && ErrorCode == null)
        	{
        		trace("[" + svcID + "] 에러코드 : " + ErrorCode + "\n에러메세지 : " + ErrorMsg);
        		// this.gfnErrorPopup(svcID, ErrorMsg);
        	}
        	else
        	{
        		// 트랜잭션 완료
        		trace("===== " + svcID + " 트랜잭션 성공 =====\n");
        		if (svcID == 'findPersonnelStatusList')
        		{
        			if (this.dsHsps.rowcount == 0)
        			{
        				alert("조회되는 직원이 없습니다.");
        			}
        		}
        	}
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
