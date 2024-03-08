package kr.co.seoulit.erp.account.budget.formulation.repository;

import kr.co.seoulit.erp.account.budget.formulation.entity.BudgetEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BudgetCustomRepository {
    @Query("SELECT b FROM BudgetEntity b " +
            "WHERE b.budgetPK.accountInnerCode = :#{#budgetEntity.budgetPK.accountInnerCode} " +
            "AND b.budgetPK.deptCode = :#{#budgetEntity.budgetPK.deptCode} " +
            "AND b.budgetPK.workplaceCode = :#{#budgetEntity.budgetPK.workplaceCode} " +
            "AND b.budgetPK.accountPeriodNo = :#{#budgetEntity.budgetPK.accountPeriodNo} " +
            "AND b.budgetPK.budgetingCode = :#{#budgetEntity.budgetPK.budgetingCode}")
    BudgetEntity findByBudgetRequest(@Param("budgetEntity") BudgetEntity budgetEntity);
}
