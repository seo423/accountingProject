package kr.co.seoulit.erp.account.posting.business.dao;

import java.util.ArrayList;

import kr.co.seoulit.erp.account.posting.business.entity.SlipEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SlipApprovalAndReturnMapper {

    //메뉴-전표승인 : 승인요청 -> "승인완료"로 update
    void updateapproveSlip(SlipEntity slipEntity);

    //메뉴-일반전표 : 작성중 -> "승인요청"으로 update
    void updateapproveSlip2(SlipEntity slipEntity);


    public ArrayList<SlipEntity> selectDisApprovalSlipList();
}
