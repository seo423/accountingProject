(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("currentAssetRegisterform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_currentAsset", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ACCOUNT_NAME\">계정과목</Col></Row><Row><Col id=\"ACCOUNT_INNER_CODE\">0195</Col><Col id=\"ACCOUNT_NAME\">설비장치</Col></Row><Row><Col id=\"ACCOUNT_INNER_CODE\">0199</Col><Col id=\"ACCOUNT_NAME\">건설용장비</Col></Row><Row><Col id=\"ACCOUNT_INNER_CODE\">0202</Col><Col id=\"ACCOUNT_NAME\">건물</Col></Row><Row><Col id=\"ACCOUNT_INNER_CODE\">0204</Col><Col id=\"ACCOUNT_NAME\">구축물</Col></Row><Row><Col id=\"ACCOUNT_NAME\">기계장치</Col><Col id=\"ACCOUNT_INNER_CODE\">0206</Col></Row><Row><Col id=\"ACCOUNT_NAME\">차량운반구</Col><Col id=\"ACCOUNT_INNER_CODE\">0208</Col></Row><Row><Col id=\"ACCOUNT_INNER_CODE\">0210</Col><Col id=\"ACCOUNT_NAME\">공구와기구</Col></Row><Row><Col id=\"ACCOUNT_INNER_CODE\">0212</Col><Col id=\"ACCOUNT_NAME\">비품</Col></Row><Row><Col id=\"ACCOUNT_NAME\">미착기계</Col><Col id=\"ACCOUNT_INNER_CODE\">0215</Col></Row><Row><Col id=\"ACCOUNT_NAME\">영업권</Col><Col id=\"ACCOUNT_INNER_CODE\">0218</Col></Row><Row><Col id=\"ACCOUNT_NAME\">특허권</Col><Col id=\"ACCOUNT_INNER_CODE\">0219</Col></Row><Row><Col id=\"ACCOUNT_NAME\">실용신안권</Col><Col id=\"ACCOUNT_INNER_CODE\">0221</Col></Row><Row><Col id=\"ACCOUNT_NAME\">의장권</Col><Col id=\"ACCOUNT_INNER_CODE\">0222</Col></Row><Row><Col id=\"ACCOUNT_NAME\">면허권</Col><Col id=\"ACCOUNT_INNER_CODE\">0223</Col></Row><Row><Col id=\"ACCOUNT_NAME\">광업권</Col><Col id=\"ACCOUNT_INNER_CODE\">0224</Col></Row><Row><Col id=\"ACCOUNT_NAME\">창업비</Col><Col id=\"ACCOUNT_INNER_CODE\">0225</Col></Row><Row><Col id=\"ACCOUNT_NAME\">개발비</Col><Col id=\"ACCOUNT_INNER_CODE\">0226</Col></Row><Row><Col id=\"ACCOUNT_NAME\">소프트웨어</Col><Col id=\"ACCOUNT_INNER_CODE\">0227</Col></Row><Row><Col id=\"ACCOUNT_NAME\">웹사이트원가</Col><Col id=\"ACCOUNT_INNER_CODE\">0228</Col></Row><Row><Col id=\"ACCOUNT_NAME\">상표권</Col><Col id=\"ACCOUNT_INNER_CODE\">0220</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_assetList", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRESS\" type=\"STRING\" size=\"256\"/><Column id=\"FINALIZE_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","365.00","10","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("고정자산 등록");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("assetSearchCombo","93","78","157","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_currentAsset");
            obj.set_codecolumn("ACCOUNT_INNER_CODE");
            obj.set_datacolumn("ACCOUNT_NAME");
            obj.set_text("계정과목");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("register_btn","267","78","75","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Grid("currentAsset_information","93.00","143","900","307",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_assetList");
            obj.set_nodatatext("조회된 자산이 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정코드\"/><Cell col=\"1\" text=\"계정과목\"/><Cell col=\"2\" text=\"자산코드\"/><Cell col=\"3\" text=\"자산명\"/><Cell col=\"4\" text=\"취득일\"/><Cell col=\"5\" text=\"처리여부\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_CODE\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"2\" text=\"bind:ASSET_CODE\"/><Cell col=\"3\" text=\"bind:ASSET_NAME\"/><Cell col=\"4\" text=\"bind:PROGRESS\"/><Cell col=\"5\" text=\"bind:FINALIZE_STATUS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("currentAssetRegisterform.xfdl","scripts::commonOpen.xjs");
        this.addIncludeScript("currentAssetRegisterform.xfdl","scripts::commonDate.xjs");
        this.addIncludeScript("currentAssetRegisterform.xfdl","scripts::commonRandom.xjs");
        this.registerScript("currentAssetRegisterform.xfdl", function() {
        /*************************************************************/
        /* 프 로 그 램 : C:\Users\owner\Desktop\77th_2nd_Nexa ACC\Nexacro_Front\operate\currentAssetRegisterform.xfdl
        /* 작 성 일 자 : 2024/01/16
        /* 작 성 자 명 : S.U
        /* 설       명 : 고정자산등록 폼
        /*************************************************************/
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/
        this.executeIncludeScript("scripts::commonRandom.xjs"); /*include "scripts::commonRandom.xjs"*/
        application = nexacro.getApplication();
        var accountName = '계정과목';
        var accountCode = '';

        // 창이 켜지면서 조회
        this.currentAssetRegisterform_onload = function(obj,e)
        {
        	var id = "findAssetList";
        	var url = "svcOperate::findAssetList";
        	var reqData = "";
        	var resData = "ds_assetList=ds_asset";
        	var args = "";
        	var callback = "onload_callbackFunc";

        	this.transaction(id, url, reqData, resData, args, callback);

        	application.ds_assetList.filter('');
        }


        // 계정과목별 고정자산 조회
        this.assetSearch_onitemchanged = function(obj, e)
        {
        	//var objDs=obj.getInnerDataset();
        	//선택된 아이템을 변수에 할당
        	accountCode = e.postvalue;
        	accountName = obj.text;
        	trace('<<<<<< 선택 계정코드 : '+ accountCode);
        	trace('<<<<<< 선택 계정과목 : '+ accountName);

        	if(accountName == '계정과목'){
        		this.ds_assetList.filter("");
        	}else{
        		this.ds_assetList.filter("ACCOUNT_NAME=='"+accountName+"'");
        	}

        };

        // 고정자산상세 조회
        this.currentAsset_information_oncelldblclick = function (obj,e)
        {
        	var assetCode = this.currentAsset_information.getCellText(this.currentAsset_information.currentrow, 2); // 고정자산코드를 열리는 폼에 넘김
        	trace(assetCode);

        	//띄울 poppdiv의 정보를 작성하고
        	var sID="currentAssetdetailform";
        	var sURL="popup::currentAssetdetailform.xfdl";
        	var param={assetCode : assetCode}; // 생성되는 폼에 파라미터를 넘겨준다.
        	var callbackFunc="currentAssetdetailform_callbackFunc";
        	// 해당 프레임을 생성												 //            --파라미터 순서--
        	var oChildFrame = new ChildFrame(sID, 0, 0, 0, 0, null, null, sURL);  // 프레임명, 부모프레임의 왼쪽과의 거리,
        	// 부모프레임의 상단과의 거리, 해당 프레임의 넓이,
        	// 해당 프레임의 높이, 부로 프레임의 오른쪽과의 거리,
        	// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소
        	// 해당 프레임 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        	oChildFrame.set_openalign("center middle");  // ---> 띄워지는 위치를 지정
        	oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);

        	trace("this is for read");
        };


        // 고정자산 등록
        this.register_btn_onclick = function(obj,e)
        {
        	if (accountName == "계정과목") {
        		alert("계정과목을 선택해 주세요.");
        	} else {
        		var todate = this.gfn_today().toString().substring(2).replace(/-/gi, '');
        		var assetCode = todate + this.gfn_randomAlpha(3);
        		trace('accountCode : ' + accountCode);
        		trace('accountName : ' + accountName);
        		trace('assetCode : ' + assetCode);

        		//띄울 poppdiv의 정보를 작성하고
        		var sID="currentAssetRegistform";
        		var sURL="popup::currentAssetRegistform.xfdl";
        		var param={accountCode:accountCode, accountName:accountName, assetCode:assetCode}; // 열리는 폼에 파라미터를 넘겨준다.
        		var callbackFunc="currentAsset_Regist_form_callbackFunc";
        		// 해당 프레임을 생성												 //            --파라미터 순서--
        		var oChildFrame = new ChildFrame(sID,0, 0, 0, 0, null, null, sURL);  // 프레임명, 부모프레임의 왼쪽과의 거리,
        		// 부모프레임의 상단과의 거리, 해당 프레임의 넓이,
        		// 해당 프레임의 높이, 부로 프레임의 오른쪽과의 거리,
        		// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소
        		// 해당 프레임을 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        		oChildFrame.set_openalign("center middle");
        		oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);
        	}
        };

        // currentAssetRegistform의 콜백함수를 받는 함수 입니다.
        this.currentAsset_Regist_form_callbackFunc = function(obj,e)
        {
        	trace("<<<<<<< callback function has been called");

        	if(e=='esc'||e=='list_btn'){
        		trace('<<<<<<<<<<<<<<<< this is esc or list_btn >>>>>>>>>>>>>>>>>>>');
        	}else if(e=='del_btn'||e=='mod_btn'||e=='saveData'){
        		this.reload();
        		trace(">>>>>>> currentAssetform has been reloaded!!");

        	}
        }

        // currentAssetdetailform의 콜백함수를 받는 함수 입니다.
        this.currentAssetdetailform_callbackFunc = function(obj,e)
        {
        	trace("<<<<<<< callback function has been called");

        	if(e=='esc'||e=='list_btn'){
        		trace('<<<<<<<<<<<<<<<< this is esc or list_btn >>>>>>>>>>>>>>>>>>>');
        	}else if(e=='del_btn'||e=='mod_btn'||e=='saveData'){
        		this.reload();
        		trace(">>>>>>> currentAssetform has been reloaded!!");

        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.currentAssetRegisterform_onload,this);
            this.assetSearchCombo.addEventHandler("onitemchanged",this.assetSearch_onitemchanged,this);
            this.register_btn.addEventHandler("onclick",this.register_btn_onclick,this);
            this.currentAsset_information.addEventHandler("oncelldblclick",this.currentAsset_information_oncelldblclick,this);
        };
        this.loadIncludeScript("currentAssetRegisterform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
