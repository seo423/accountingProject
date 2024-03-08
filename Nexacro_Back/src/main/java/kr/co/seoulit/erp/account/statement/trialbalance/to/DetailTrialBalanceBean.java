package kr.co.seoulit.erp.account.statement.trialbalance.to;

import kr.co.seoulit.erp.account.sys.common.annotation.Dataset;
import lombok.Data;

@Data
@Dataset(name = "ds_detailtrialbalance")
public class DetailTrialBalanceBean{
//	private int lev;
//	private String accountInnerCode;
//	private int debitsSum;
//	private int exceptCashDebits;
//	private int cashDebits;
//	private String accountName;
//	private int creditsSumBalance;
//	private int debitsSumBalance;
//	private int cashCredits;
//	private int exceptCashCredits;
//	private int creditsSum;

	private int debitsSum;
	private int exceptCashDebits;
	private int cashDebits;
	private String accountName;
	private int cashCredits;
	private int exceptCashCredits;
	private int creditsSum;
}
