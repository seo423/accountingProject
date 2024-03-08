package kr.co.seoulit.erp.account.statement.trialbalance.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import kr.co.seoulit.erp.account.sys.common.dao.DatasetToBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexacro.java.xapi.data.PlatformData;

import kr.co.seoulit.erp.account.statement.trialbalance.service.TrialBalanceService;
import kr.co.seoulit.erp.account.statement.trialbalance.to.DetailTrialBalanceBean;


@RestController
@RequestMapping("/acc/statement")
public class DetailTrialBalanceController {
	@Autowired
    private TrialBalanceService trialBalanceService;
	@Autowired
    private DatasetToBeanMapper datasetToBeanMapper;

    //일(월)계표 조회
	@RequestMapping("/detailtrialbalance")
    public List<DetailTrialBalanceBean> handleRequestInternal(@RequestAttribute("reqData")PlatformData reqData,
                                                              @RequestAttribute("resData")PlatformData resData) throws Exception {

        String fromDate = reqData.getVariable("startDate").getString();
        String toDate = reqData.getVariable("endDate").getString();

        HashMap<String, Object> params=new HashMap<>();
        params.put("fromDate", fromDate);
        params.put("toDate", toDate);

//        HashMap<String, Object>aa = trialBalanceService.findDetailTrialBalance(params);
//        System.out.println(aa);
//        ArrayList<DetailTrialBalanceBean> aaa = new ArrayList<>();
//        DetailTrialBalanceBean ad = new DetailTrialBalanceBean();
//        ad.setAccountName("dkssud");
//        aaa.add(ad);
//
//        ArrayList<DetailTrialBalanceBean>  result = (ArrayList<DetailTrialBalanceBean>) params.get("RESULT");
////        for(DetailTrialBalanceBean a : result){
////        System.out.println("------------------"+a.getAccountName());}
//        datasetBeanMapper.beansToDataset(resData, aaa, DetailTrialBalanceBean.class);
//
//        return null;

        List<DetailTrialBalanceBean>  aa = trialBalanceService.findDetailTrialBalance(params);
        System.out.println(aa);
//        ArrayList<DetailTrialBalanceBean> aaa = new ArrayList<>();
        System.out.println(aa);

        ArrayList<DetailTrialBalanceBean>  result = (ArrayList<DetailTrialBalanceBean>) params.get("RESULT");
//        for(DetailTrialBalanceBean a : result){
//        System.out.println("------------------"+a.getAccountName());}
        datasetToBeanMapper.beansToDataset(resData, aa, DetailTrialBalanceBean.class);

        return null;

    }
}
