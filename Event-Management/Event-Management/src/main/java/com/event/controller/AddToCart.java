package com.event.controller;

import java.io.IOException;

import com.event.model.Registration;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/addtocart")
public class AddToCart extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doGet(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");

		HttpSession session = request.getSession();
		Registration r = new Registration(session);
		try {

			if (session.getAttribute("uname") != null && request.getParameter("bookevent") != null) {
				System.out.println("Inside IF condition add to cart");
				String status = r.Booknow(request);
				if (status.equals("success")) {
					request.setAttribute("status",
							"Booking successful.<a href='Eventstatus.jsp'>Click here</a> to check status.");
					RequestDispatcher rd = request
							.getRequestDispatcher("EventBooking.jsp?event_id=" + request.getParameter("event_id"));
					rd.forward(request, response);
				} else if (status.equals("failure")) {
					request.setAttribute("status", "Booking failed");
					RequestDispatcher rd = request
							.getRequestDispatcher("EventBooking.jsp?event_id=" + request.getParameter("event_id"));
					rd.forward(request, response);
				} else if (status.equals("existed")) {
					request.setAttribute("status", "Date not available for event");
					RequestDispatcher rd = request
							.getRequestDispatcher("EventBooking.jsp?event_id=" + request.getParameter("event_id"));
					rd.forward(request, response);
				}
			}else if(session.getAttribute("uname") != null && request.getParameter("cancelevent") != null ) {
				int a =r.deleteevent(Integer.parseInt(request.getParameter("event_id")));
				
				if(a>0) {
					RequestDispatcher rd = request
							.getRequestDispatcher("Eventstatus.jsp");
					rd.forward(request, response);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();

		}

	}

}
