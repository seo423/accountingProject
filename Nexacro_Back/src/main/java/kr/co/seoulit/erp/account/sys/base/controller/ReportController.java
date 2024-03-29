package kr.co.seoulit.erp.account.sys.base.controller;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.co.seoulit.erp.account.sys.base.service.BaseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
@RestController
@RequestMapping("/acc/base")
public class ReportController{
	
	@Autowired
	private BaseService baseService;
	
	private ModelAndView modelAndView = null;

    @GetMapping("/financialposition")
	public void FinancialPosition(HttpServletRequest request, HttpServletResponse response) {
		log.debug("전표 아이리포트 시작");
		// SMTPAppender log4j
	
		
		response.setContentType("application/json; charset=UTF-8");
		response.setCharacterEncoding("utf-8");
		
			String slipNo = request.getParameter("slipNo");
		

			baseService.findIreportData(request, response, slipNo);

		
	
	}
    @GetMapping("/totaltrialbalancepdf")
	public void totalTrialBalancePdf(HttpServletRequest request, HttpServletResponse response) {
		log.debug("합계잔액시산표 아이리포트 시작");
	
		response.setContentType("application/json; charset=UTF-8");
		response.setCharacterEncoding("utf-8");
	
		baseService.findIreportTotalData(request, response);

		
	}
    @GetMapping("/incomestatementpdf")
	public void incomeStatementPdf(HttpServletRequest request, HttpServletResponse response) {
		log.debug("손익계산서 아이리포트 시작");
		
		response.setContentType("application/json; charset=UTF-8");
		response.setCharacterEncoding("utf-8");
	
		baseService.findIreportDataincome(request, response);

		
		
	}
    @GetMapping("/financialpositionpdf")
	public ModelAndView financialPositionPdf(HttpServletRequest request, HttpServletResponse response) {
		log.debug("재무상태표 아이리포트 시작");
		// SMTPAppender log4j
		
		response.setContentType("application/json; charset=UTF-8");
		response.setCharacterEncoding("utf-8");
		
		baseService.findIreportDatafinance(request, response);

		return modelAndView;
	}

}