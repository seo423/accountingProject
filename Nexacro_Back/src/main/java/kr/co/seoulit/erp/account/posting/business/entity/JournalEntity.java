package kr.co.seoulit.erp.account.posting.business.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import kr.co.seoulit.erp.account.sys.base.to.BaseBean;
import kr.co.seoulit.erp.account.sys.common.annotation.Dataset;
import lombok.Getter;
import lombok.Setter;

@Entity
@Dataset(name = "gds_journal2")
@Table(name = "JOURNAL")
@Getter @Setter
public class JournalEntity extends BaseBean {
	//분개
	    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "JOURNAL_NO")
	    private String journalNo;

	    private String slipNo;

	    @Column(columnDefinition = "nchar")
	    private String balanceDivision;

	    @Column(name = "ACCOUNT_INNER_CODE")
	    private String accountInnerCode;

		@Transient
		private String accountName;
	    private String customerCode;
		private String customerName;


		//원래 String
	    @Column(columnDefinition = "number")
	    private String leftDebtorPrice;

	    //원래 String
	    @Column(columnDefinition = "number")
	    private String  rightCreditsPrice;

	    @OneToMany
	    @JoinColumn(name = "journalDetailNo")
	    private List<JournalDetailEntity> journalDetailList;

	}
