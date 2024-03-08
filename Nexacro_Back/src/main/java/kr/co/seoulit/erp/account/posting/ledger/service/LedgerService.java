package kr.co.seoulit.erp.account.posting.ledger.service;

import java.util.ArrayList;
import java.util.HashMap;

import kr.co.seoulit.erp.account.posting.ledger.dto.*;
import kr.co.seoulit.erp.account.posting.ledger.dto.*;

public interface LedgerService {

    //현금출납장 조회
	ArrayList<CashJournalBean> findCashJournal(String fromDate, String toDate, String account);

    ArrayList<CashJournalBean> findTotalCashJournal(HashMap<String, String> map);

    ArrayList<JournalDtoRes> findRangedJournalList(String fromDate, String toDate);

    ArrayList<JournalDetailDtoRes> findJournalDetailList(String journalNo);

    ArrayList<AssetResDto> findAssetList();

    ArrayList<AssetItemResDto> findAssetItemList(String parentsCode);

    ArrayList<DeptResDto> findDeptList();

    void assetStorage(AssetItemReqDto assetItemReqDto);

    void removeAssetItem(String assetItemCode);

    ArrayList<CustomerLedgerBean> findCustomerLedger(String fromDate, String toDate);

    ArrayList<CustomerLedgerDetailResDto> findCustomerLedgerDetailList(String customerCode);


}

