//XJS=commonDate.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"scripts::commonScripts.xjs");
        this.addIncludeScript(path,"scripts::commonString.xjs");
        this.registerScript(path, function() {

        /********************************************************************************
         공통 유틸
         @Path          scripts::commonDate.xjs
         @Description   공통 Date 함수
         @Author        최용우
         @Create        2019. 11. 20.

         * =========================================================================
         * 수정일자     수정자    내    용
         * =========================================================================
         * 2019.11.20    최용우    최초 작성

         ********************************************************************************/

        /***************************************************************************
         * this.gfn_isDate			: 날짜에 대한 형식 체크 - 일자(yyyy-MM-dd 등)
         * this.gfn_isDate6			: 6자리 년월 날짜에 대한 형식 체크 - 일자(yyyyMM)
         * this.gfn_isDate8			: 8자리 년월 날짜에 대한 형식 체크 - 일자(yyyyMMdd)
         * this.gfn_isTime			: 시간 정합성 체크
         * this.gfn_today			: 해당 PC의 오늘 날짜를 가져온다.
         * this.gfn_todayFirst		: 해당 PC의 당월의 첫날을 가져온다.
         * this.gfn_secToTime		: 초형식을 시간형식으로 변환
         * this.gfn_todayTime		: 해당 PC의 오늘 날짜와 시간를 가져온다.
         * this.gfn_getDiffDay       : 2개의 날짜간의 Day count
         * this.gfn_addDate          : 입력된 날자에 OffSet 으로 지정된 만큼의 일을 더한다.
         * this.gfn_addMonth         : 입력된 날자에 OffSet 으로 지정된 만큼의 달을 더한다.
         * this.gfn_strToDate        : String 타입의 형식을 날짜형식으로 변환
         * this.gfn_dateTime         : MiPlatform에서 사용하던 Datetime형식으로 변환 Date Type을 String으로 변환
         * this.gfn_getLastDateNum   : 해당월의 마지막 날짜를 숫자로 구하기
         * this.gfn_isLeapYear       : 윤년여부 확인 - 일자(yyyyMMdd)
         * this.gfn_getDay           : 입력된 날자로부터 요일을 구함
         * this.gfn_getYear          : 해당년도 구하기 - 일자(yyyyMMdd)
         * this.gfn_callMonthPop     : 해당 위치에 월력Div을 팝업 호출
         * this.gfn_callMonthPopDiv  : 월력Div 팝업 생성
         **************************************************************************/
        this.executeIncludeScript("scripts::commonScripts.xjs"); /*include "scripts::commonScripts.xjs"*/
        this.executeIncludeScript("scripts::commonString.xjs"); /*include "scripts::commonString.xjs"*/
        /**
         * @class 날짜에 대한 형식 체크
         * @param sDate  - 일자(yyyy-MM-dd 등)
         * @return boolean
         */
        this.gfn_isDate = function (sDate)
        {
        	var stringWrapper = new String(sDate);
        	stringWrapper = stringWrapper.replace("/", "").replace("/", "");
        	stringWrapper = stringWrapper.replace("-", "").replace("-", "");
        	stringWrapper = stringWrapper.replace(".", "").replace(".", "");

        	if (stringWrapper.toString().length !== 8)
        	{
        		return false;
        	}

        	var iMonth = Math.floor(stringWrapper.slice(4, 6), 10);
        	var iDate = Math.floor(stringWrapper.slice(6, 8), 10);

        	if (iMonth < 1 || iMonth > 12)
        	{
        		return false;
        	}
        	if (iDate < 1 || iDate > this.gfn_getLastDateNum(stringWrapper))
        	{
        		return false;
        	}

        	return true;
        };

        /**
         * @class 6자리 년월 날짜에 대한 형식 체크
         * @param sDate  - 일자(yyyyMM)
         * @return boolean
         */
        this.gfn_isDate6 = function (sDate)
        {
        	if (this.gfn_length(sDate) != 6)
        	{
        		return false;
        	}
        	else if (!this.gfn_isDate(sDate + "01"))
        	{
        		return false;
        	}
        	return true;
        };

        /**
         * @class 8자리 년월 날짜에 대한 형식 체크
         * @param sDate  - 일자(yyyyMMdd)
         * @return boolean
         */
        this.gfn_isDate8 = function (sDate)
        {
        	if (this.gfn_length(sDate) != 8)
        	{
        		return false;
        	}
        	else if (!this.gfn_isDate(sDate))
        	{
        		return false;
        	}
        	return true;
        };

        /**
         * @class 시간 정합성 체크
         * @param val - 입력문자열
         * @return Boolean 형식의 정합성 체크
         */
        this.gfn_isTime = function (val)
        {
        	if (this.gfn_isDigit(val) != true)
        	{
        		return false;
        	}

        	if (val.trim().toString().length != 6)
        	{
        		return false;
        	}

        	var nHH = toNumber(val.toString().substr(0, 2));
        	var nMM = toNumber(val.toString().substr(2, 2));
        	var nSS = toNumber(val.toString().substr(4, 2));

        	if (this.gfn_isNull(nHH) || this.gfn_isNull(nMM) || this.gfn_isNull(nMM))
        	{
        		return false;
        	}

        	if (nHH > 23 || nHH < 0)
        	{
        		return false;
        	}

        	if (nMM > 59 || nMM < 0)
        	{
        		return false;
        	}

        	if (nSS > 59 || nSS < 0)
        	{
        		return false;
        	}

        	return true;
        };

        /**
         * @class 해당 PC의 오늘 날짜를 가져온다.
         * @return string 오늘 날짜
         */
        this.gfn_today = function ()
        {
        	var strToday = "";
        	var objDate = new Date();

        	var strToday = objDate.getFullYear().toString();
        	strToday += "-"+this.gfn_right("0" + (objDate.getMonth() + 1), 2);
        	strToday += "-"+this.gfn_right("0" + objDate.getDate(), 2);

        	return strToday;
        };

        /**
         * @class 해당 PC의 당월의 첫날을 가져온다.
         * @return string 당월의 첫날 날짜
         */
        this.gfn_todayFirst = function ()
        {
        	var strToday = "";
        	var objDate = new Date();

        	var strToday = objDate.getFullYear().toString();
        	strToday += "-"+this.gfn_right("0" + (objDate.getMonth() + 1), 2);
        	strToday += "-"+"01";

        	return strToday;
        };


        /**
         * @class 초형식을 시간형식으로 변환
         * @param sValue  - 초단위의 시간 (SSSSS)
         * @return Strimg 내부시간형식 (HHMMSS)
         */
        this.gfn_secToTime = function (sValue)
        {
        	var sReturnValue = "";
        	var iHH = "";
        	var iMM = "";
        	var iSS = "";
        	var sHH = "";
        	var sMM = "";
        	var sSS = "";

        	if (this.gfn_isNull(sValue) || sValue < 0)
        	{
        		sReturnValue = 0;
        	}
        	else
        	{
        		iHH = parseInt(toNumber(sValue) / 3600);
        		iMM = parseInt((toNumber(sValue) - iHH * 3600) / 60);
        		iSS = parseInt((toNumber(sValue) - iHH * 3600) % 60);

        		if (iHH < 10)
        		{
        			sHH = "0" + iHH;
        		}
        		else
        		{
        			sHH = iHH;
        		}

        		if (iMM < 10)
        		{
        			sMM = "0" + iMM;
        		}
        		else
        		{
        			sMM = iMM;
        		}

        		if (iSS < 10)
        		{
        			sSS = "0" + iSS;
        		}
        		else
        		{
        			sSS = iSS;
        		}

        		sReturnValue = sHH.toString() + sMM.toString() + sSS.toString();
        	}
        	return this.gfn_trim(sReturnValue);
        };

        /**
         * @class 해당 PC의 오늘 날짜와 시간를 가져온다.
         * @return string 오늘 날짜+시간
         */
        this.gfn_todayTime = function ()
        {
        	var strToday = "";
        	var objDate = new Date();
        	var sToday = objDate.getFullYear().toString();
        	sToday += this.gfn_right("0" + (objDate.getMonth() + 1), 2);
        	sToday += this.gfn_right("0" + objDate.getDate(), 2);
        	sToday += this.gfn_right("0" + objDate.getHours(), 2);
        	sToday += this.gfn_right("0" + objDate.getMinutes(), 2);
        	sToday += this.gfn_right("0" + objDate.getSeconds(), 2);
        	// strToday += objDate.getMilliseconds();
        	return sToday;
        };

        /**
         * @class 2개의 날짜간의 Day count
         * @param sFdate - 시작일자
         * @param sTdate - 종료일자
         * @return string 양 일자간의 Day count
         */
        this.gfn_getDiffDay = function (sFdate, sTdate)
        {
        	sFdate = new String(sFdate);
        	sFdate = sFdate.split(" ").join("").split("-").join("").split("/").join("");
        	sTdate = new String(sTdate);
        	sTdate = sTdate.split(" ").join("").split("-").join("").split("/").join("");

        	sFdate = this.gfn_left(sFdate, 8);
        	sTdate = this.gfn_left(sTdate, 8);

        	if (sFdate.length != 8 || sTdate.length != 8
        		 || isNumeric(sFdate) == false || isNumeric(sTdate) == false
        		 || this.gfn_getDay(sFdate) == -1 || this.gfn_getDay(sTdate) == -1)
        	{
        		return null;
        	}

        	var nDiffDate = this.gfn_strToDate(sTdate) - this.gfn_strToDate(sFdate);
        	var nDay = 1000 * 60 * 60 * 24;

        	nDiffDate = parseInt(nDiffDate / nDay);
        	if (nDiffDate < 0)
        	{
        		nDiffDate = nDiffDate; //- 1 : 해당일 포함
        	}
        	else
        	{
        		nDiffDate = nDiffDate; //+ 1 : 해당일 포함
        	}

        	return nDiffDate;
        };

        /**
         * @class 입력된 날자에 OffSet 으로 지정된 만큼의 일을 더한다.
         * @param sDate  - 일자(yyyyMMdd)
         * @param nOffSet  - 날짜로부터 증가 감소값. 지정하지 않으면 Default Value = 1 로 적용
         * @return string Date에 nOffset이 더해진 결과를 'yyyyMMdd'로 표현된 날자.
         */
        this.gfn_addDate = function (sDate, nOffSet)
        {
        	if (this.gfn_isNull(sDate))
        	{
        		return;
        	}

        	var nYear = parseInt(gfn_subStr(sDate, 0, 4));
        	var nMonth = parseInt(gfn_subStr(sDate, 4, 2));
        	var nDate = parseInt(gfn_subStr(sDate, 6, 2)) + parseInt(nOffSet);

        	return this.gfn_dateTime(nYear, nMonth, nDate);
        };

        /**
         * @class 입력된 날자에 OffSet 으로 지정된 만큼의 달을 더한다.
         * @param sDate  - 일자(yyyyMMdd)
         * @param nOffSet  - 날짜로부터 증가 감소값. 지정하지 않으면 Default Value = 1 로 적용
         * @return string Date에 nOffset이 더해진 결과를 'yyyyMMdd'로 표현된 날자.
         */
        this.gfn_addMonth = function (sDate, nOffSet)
        {
        	if (this.gfn_isNull(sDate) || this.gfn_isNull(nOffSet))
        	{
        		return "";
        	}

        	var nYear = parseInt(sDate.substr(0, 4));
        	var nMonth = parseInt(sDate.substr(4, 2)) + nOffSet;
        	var nDate = parseInt(sDate.substr(6, 2));
        	var nLastDate,sRet;

        	if (nDate.toString().length == 1)
        	{
        		nDate = "0" + nDate;
        	}

        	sRet = this.gfn_dateTime(nYear, nMonth, 1);
        	nLastDate = this.gfn_getLastDateNum(sRet);
        	sRet = sRet.substr(0, 6);

        	if (nDate > nLastDate)
        	{
        		sRet += nLastDate.toString();
        	}
        	else
        	{
        		sRet += nDate.toString();
        	}

        	return sRet;
        };

        /**
         * @class String 타입의 형식을 날짜형식으로 변환
         * @param sDate  - 일자(yyyyMMdd)
         * @return Date 날자
         */
        this.gfn_strToDate = function (sDate)
        {
        	var nYear = parseInt(this.gfn_subStr(sDate, 0, 4));
        	var nMonth = parseInt(this.gfn_subStr(sDate, 4, 2)) - 1;
        	var nDate = parseInt(this.gfn_subStr(sDate, 6, 2));

        	return new Date(nYear, nMonth, nDate);
        };


        /**
         * @class MiPlatform에서 사용하던 Datetime형식으로 변환 Date Type을 String으로 변환
         * @param nYear  - nYear (년도)
         * @param nMonth - nMonth (월)
         * @param nDate  - nDate (일)
         * @return string 조합한 날짜를 리턴
         */
        this.gfn_dateTime = function (nYear, nMonth, nDate)
        {
        	if (nYear.toString().trim().length >= 5)
        	{
        		var sDate = new String(nYear);
        		var nYear = sDate.substr(0, 4);
        		var nMonth = sDate.substr(4, 2);
        		var nDate = ((sDate.substr(6, 2) == "") ? 1 : sDate.substr(6, 2));
        		var nHours = ((sDate.substr(8, 2) == "") ? 0 : sDate.substr(8, 2));
        		var nMinutes = ((sDate.substr(10, 2) == "") ? 0 : sDate.substr(10, 2));
        		var nSeconds = ((sDate.substr(12, 2) == "") ? 0 : sDate.substr(12, 2));

        		var objDate = new Date(parseInt(nYear), parseInt(nMonth) - 1, parseInt(nDate), parseInt(nHours), parseInt(nMinutes), parseInt(nSeconds));
        	}
        	else
        	{
        		var objDate = new Date(parseInt(nYear), parseInt(nMonth) - 1, parseInt(((nDate == null) ? 1 : nDate)));
        	}
        	var strYear = objDate.getYear().toString();
        	var strMonth = (objDate.getMonth() + 1).toString();
        	var strDate = objDate.getDate().toString();


        	if (strYear.length == 2)
        	{
        		strYear = "19" + strYear;
        	}

        	if (strMonth.length == 1)
        	{
        		strMonth = "0" + strMonth;
        	}
        	if (strDate.length == 1)
        	{
        		strDate = "0" + strDate;
        	}

        	return strYear + strMonth + strDate;
        };

        /**
         * @class 해당월의 마지막 날짜를 숫자로 구하기
         * @param sDate  - 일자(yyyyMMdd)
         * @return integer 마지막 날짜 숫자값 ( 예 : "30" )
         */
        this.gfn_getLastDateNum = function (sDate)
        {
        	var nMonth,nLastDate;

        	if (this.gfn_isNull(sDate))
        	{
        		return -1;
        	}

        	nMonth = parseInt(sDate.substr(4, 2), 10);
        	if (nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7 || nMonth == 8 || nMonth == 10 || nMonth == 12)
        	{
        		nLastDate = 31;
        	}
        	else if (nMonth == 2)
        	{
        		if (this.gfn_isLeapYear(sDate) == true)
        		{
        			nLastDate = 29;
        		}
        		else
        		{
        			nLastDate = 28;
        		}
        	}
        	else
        	{
        		nLastDate = 30;
        	}

        	return nLastDate;
        };

        /**
         * @class 윤년여부 확인
         * @param sDate  - 일자(yyyyMMdd)
         * @return boolean
         */
        this.gfn_isLeapYear = function (sDate)
        {
        	var ret;
        	var nY;

        	if (this.gfn_isNull(sDate))
        	{
        		return false;
        	}

        	nY = parseInt(sDate.substring(0, 4), 10);

        	if ((nY % 4) == 0)
        	{
        		if ((nY % 100) != 0 || (nY % 400) == 0)
        		{
        			ret = true;
        		}
        		else
        		{
        			ret = false;
        		}
        	}
        	else
        	{
        		ret = false;
        	}

        	return ret;
        };

        /**
         * @class 입력된 날자로부터 요일을 구함
         * @param sDate  - 일자(yyyyMMdd)
         * @return Integer 요일에 따른 숫자
         */
        this.gfn_getDay = function (sDate)
        {
        	var objDate = this.gfn_strToDate(sDate);
        	return objDate.getDay();
        };

        /**
         * @class 해당년도 구하기
         * @param sDate  - 일자(yyyyMMdd)
         * @return string yyyy형태의 년도 ( 예 : "2012" )
         */
        this.gfn_getYear = function (sDate)
        {
        	if (this.gfn_isNull(sDate))
        	{
        		sDate = this.gfn_today();
        	}

        	return sDate.substr(0, 4);
        };

        /**
         * @class 해당 위치에 월력Div을 팝업 호출
         * @param obj    - 월력띄울 컴포넌트
         * @param sMonth - 년월
         * @param nX     - x좌표
         * @param nY     - Y좌표
         * @return 없음
         */
        this.gfn_callMonthPop = function (obj, sMonth, nArgX, nArgY)
        {
        	var nX = 0;
        	var nY = 0;
        	if (!this.gfn_isNull(nArgX))
        	{
        		nX = nArgX;
        	}
        	else
        	{
        		// nX = system.clientToScreenX(obj, obj.position.left -2);		// Left
        		nX = system.clientToScreenX(obj, -1);
        	}

        	if (!this.gfn_isNull(nArgY))
        	{
        		nY = nArgY;
        	}
        	else
        	{
        		// nY = system.clientToScreenY(obj, obj.position.bottom -1);	// Top
        		nY = system.clientToScreenY(obj, -1) + obj.position.height;
        	}
        	// trace("nX : " + nX + " / nY : " + nY);
        	return this.gfn_callMonthPopDiv(sMonth, nX, nY);
        };

        /**
         * @class 월력Div 팝업 생성
         * @param sMonth - 년월
         * @param nX     - x좌표
         * @param nY     - Y좌표
         * @return string 월력DIV에서 선택한 년월(YYYYMM)
         */
        this.gfn_callMonthPopDiv = function (sMonth, nX, nY)
        {
        	if (sMonth == undefined)
        	{
        		sMonth = "".substring(0, 6);
        	}
        	var sPopupDivNm = "pdv_calMonthPop";
        	var nPopupDivWidth = 168;
        	var nPopupDivHeight = 181;

        	var objForm = this;
        	if (!objForm.all[sPopupDivNm])
        	{
        		objPopupDiv = new PopupDiv("PopupCalMonthDiv", 0, 0, nPopupDivWidth + 2, nPopupDivHeight + 2);
        		objForm.addChild(sPopupDivNm, objPopupDiv);
        		objPopupDiv.url = "cmn::ObjCalMonthPop.xfdl";
        		objPopupDiv.show();
        	}

        	objPopupDiv.fn_setCalendar(gfn_trim(sMonth).substring(0, 6));
        	var sRet = objPopupDiv.trackPopup(nX, nY);

        	// 삭제
        	this.removeChild(sPopupDivNm);
        	objPopupDiv.destroy();
        	objPopupDiv = null;
        	return sRet;
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
