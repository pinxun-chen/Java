package servlet;

import java.io.IOException;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.DrinkOrder;

@WebServlet("/drink")
public class DrinkOrderServlet extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html;charset=UTF-8");
		
		String type = req.getParameter("type");
		String size = req.getParameter("size");
		String ice = req.getParameter("ice");
		
		if(type == null || size == null || ice == null) {
			resp.getWriter().print("參數輸入不正確");
			return;
		}
		
		DrinkOrder drinkOrder = new DrinkOrder(type, size, ice);
		
		req.setAttribute("drinkOrder", drinkOrder);
		
		//resp.getWriter().print(drinkOrder.getInfo());
		RequestDispatcher rd = req.getRequestDispatcher("/WEB-INF/drink_order.jsp");
		rd.forward(req, resp);
	}

}
