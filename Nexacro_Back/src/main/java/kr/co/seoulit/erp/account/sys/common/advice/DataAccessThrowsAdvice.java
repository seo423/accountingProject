package kr.co.seoulit.erp.account.sys.common.advice;

import kr.co.seoulit.erp.account.sys.common.exception.DataAccessException;
import org.springframework.aop.ThrowsAdvice;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class DataAccessThrowsAdvice implements ThrowsAdvice {
	
	public void afterThrowing(DataAccessException e) throws Throwable {
		if (log.isDebugEnabled()) {
			log.debug("DataAccessException afterThrowing start");
			log.debug("Caught: " + e.getClass().getName());
		}

			log.warn(e.getMessage());


		if (log.isDebugEnabled()) {
			log.debug("DataAccessException afterThrowing end");
		}
		throw e;
	}

	public void afterThrowing(Exception e) throws Throwable {
		if (log.isDebugEnabled()) {
			log.debug("Exception afterThrowing start");
			log.debug("Caught: " + e.getClass().getName());
		}

			log.warn(e.getMessage());

		if (log.isDebugEnabled()) {
			log.debug("Exception afterThrowing end");
		}
		throw e;
	}
}
