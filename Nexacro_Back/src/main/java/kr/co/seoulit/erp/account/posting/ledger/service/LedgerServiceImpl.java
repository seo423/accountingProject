package kr.co.seoulit.erp.account.posting.ledger.service;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;

import kr.co.seoulit.erp.account.posting.ledger.entity.*;
import kr.co.seoulit.erp.account.posting.ledger.dao.CustomerLedgerMapper;
import kr.co.seoulit.erp.account.posting.ledger.dto.*;
import kr.co.seoulit.erp.account.posting.ledger.mapstruct.*;
import kr.co.seoulit.erp.account.posting.ledger.repository.AssetItemRepository;
import kr.co.seoulit.erp.account.posting.ledger.repository.AssetRepository;
import kr.co.seoulit.erp.account.posting.ledger.repository.DeptRepository;
import kr.co.seoulit.erp.account.posting.ledger.dao.AssistantLedgerMapper;
import kr.co.seoulit.erp.account.posting.ledger.dao.AuxiliaryLedgerMapper;
import kr.co.seoulit.erp.account.posting.ledger.dao.JournalEntryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class LedgerServiceImpl implements LedgerService, Serializable {

	@Autowired
    private JournalEntryMapper journalEntryDAO;
	@Autowired
    private AuxiliaryLedgerMapper auxiliaryLedgerDAO;
	@Autowired
    private AssistantLedgerMapper assistantLedgerDAO;
	@Autowired
	private CustomerLedgerMapper customerLedgerDAO;

	@Autowired
	private AssetItemRepository assetItemRepository;
	@Autowired
	private AssetRepository assetRepository;
	@Autowired
	private DeptRepository deptRepository;

	@Autowired
	private AssetItemReqMapStruct assetItemReqMapStruct;
	@Autowired
	private AssetItemResMapStruct assetItemResMapStruct;
	@Autowired
	private AssetMapStruct assetMapStruct;
	@Autowired
	private DeptMapStruct deptMapStruct;
	@Autowired
	private JournalMapstruct journalMapstruct;
	@Autowired
	private JournalDetailMapstruct journalDetailMapstruct;


	private RedisTemplate<String, ArrayList<DeptEntity>> redisTemplate=new RedisTemplate<>();

	@Override
	public ArrayList<CashJournalBean> findTotalCashJournal(HashMap<String, String> map) {

        	ArrayList<CashJournalBean> cashJournalList = auxiliaryLedgerDAO.selectTotalCashJournalList(map);

        return cashJournalList;
	}

	//현금출납장 조회
	@Override
	public ArrayList<CashJournalBean> findCashJournal(String fromDate, String toDate, String account) {

			HashMap<String, String> map = new HashMap<String, String>();
			map.put("fromDate", fromDate);
			map.put("toDate", toDate);
			map.put("account", account);
			System.out.println("account : " + account + "fromDate : " + fromDate + "toDate : " + toDate);

			ArrayList<CashJournalBean> cashJournalList = auxiliaryLedgerDAO.selectCashJournalList(map);

        return cashJournalList;
	}

	@Override
    public ArrayList<JournalDtoRes> findRangedJournalList(String fromDate, String toDate) {

		ArrayList<JournalResEntity> journalListEntity =  journalEntryDAO.selectRangedJournalList(fromDate, toDate);
		ArrayList<JournalDtoRes> journalList= (ArrayList<JournalDtoRes>) journalMapstruct.toDto(journalListEntity);

		return journalList;
    }

	@Override
	public ArrayList<JournalDetailDtoRes> findJournalDetailList(String journalNo) {

		ArrayList<JournalDetailResEntity> journalDetailResEntity = journalEntryDAO.selectJournalDetailList(journalNo);
		ArrayList<JournalDetailDtoRes> journalDetailDto= (ArrayList<JournalDetailDtoRes>) journalDetailMapstruct.toDto(journalDetailResEntity);
		return journalDetailDto;
	}

	@Override
	public ArrayList<AssetResDto> findAssetList() {

		ArrayList<AssetEntity> assetEntity = (ArrayList<AssetEntity>) assetRepository.findAll();

		ArrayList<AssetResDto> resDto = (ArrayList<AssetResDto>) assetMapStruct.toDto(assetEntity);
		return resDto;

	}

	@Override
	public ArrayList<AssetItemResDto> findAssetItemList(String parentsCode) {

		ArrayList<AssetItemEntity> assetItemEntity= assistantLedgerDAO.selectAssetItemList(parentsCode);
		ArrayList<AssetItemResDto> assetItemResDto= (ArrayList<AssetItemResDto>) assetItemResMapStruct.toDto(assetItemEntity);
		return assetItemResDto;
	}

	@Override
	@Cacheable(value = "deptlist")
	public ArrayList<DeptResDto> findDeptList() {


		ArrayList<DeptEntity> deptEntity = (ArrayList<DeptEntity>) deptRepository.findAll();

		ArrayList<DeptResDto> resDto = (ArrayList<DeptResDto>) deptMapStruct.toDto(deptEntity);

		return resDto;


	}


	@Override
	public void assetStorage(AssetItemReqDto assetItemReqDto) {

		AssetItemEntity assetitemEntity= assetItemReqMapStruct.toEntity(assetItemReqDto);
		assetItemRepository.save(assetitemEntity);

	}


	@Override
	public void removeAssetItem(String assetItemCode) {

		assetItemRepository.deleteById(assetItemCode);

	}

	@Override
	public ArrayList<CustomerLedgerBean> findCustomerLedger(String fromDate, String toDate){

		ArrayList<CustomerLedgerBean> customerLedgerBean = customerLedgerDAO.selectCustomerLedgerList(fromDate,toDate);
			return customerLedgerBean;
	}
	@Override
	public ArrayList<CustomerLedgerDetailResDto> findCustomerLedgerDetailList(String customerCode){
		ArrayList<CustomerLedgerDetailResDto> customerLedgerDetailResDto = customerLedgerDAO.selectCustomerLedgerDetailList(customerCode);
		return customerLedgerDetailResDto;
	}
}
