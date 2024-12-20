package com.event.controller;

import java.io.IOException;
import java.io.PrintWriter;

import com.event.model.Registration;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/register")
public class Register extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html;charset=UTF-8");
		PrintWriter out = resp.getWriter();
		HttpSession session = req.getSession();
		Registration reg = new Registration(session);
		
		try {
			
			if (req.getParameter("register") != null) {
				String name = req.getParameter("name");
				String phone = req.getParameter("phone");
				String email = req.getParameter("email");
				String pw = req.getParameter("pw");
				String cp = req.getParameter("cp");

				if (pw.equals(cp)) {
					String status = reg.Registration(name, phone, email, pw);

					if (status.equals("existed")) {

						req.setAttribute("status", "Existed record");
						RequestDispatcher rd1 = req.getRequestDispatcher("SignUp.jsp");
						rd1.forward(req, resp);

					} else if (status.equals("success")) {

						req.setAttribute("status", "Successfully Registered");
						RequestDispatcher rd1 = req.getRequestDispatcher("Login.jsp");
						rd1.forward(req, resp);

					} else {

						req.setAttribute("status", "Registration failed");
						RequestDispatcher rd1 = req.getRequestDispatcher("SignUp.jsp");
						rd1.forward(req, resp);
					}
				}
	
			}else if (req.getParameter("login") != null) {
				System.out.println("Login");
				String mail = req.getParameter("email");
				String pass = req.getParameter("pw");
				String status = reg.login(mail, pass,session);
				System.out.println(status);
				if (status.equals("success")) {
					
					if(session.getAttribute("logoutredirect")!=null) {
						String redirect=(String) session.getAttribute("logoutredirect");
						System.out.println(redirect+" redirect code...............................");
						req.setAttribute("status", "Login Succesfully!");    
						RequestDispatcher rd1 = req.getRequestDispatcher(redirect);
						rd1.forward(req, resp);
						
//						resp.sendRedirect(redirect);
					}else {
						req.setAttribute("status", "Login Succesfully!");    
						RequestDispatcher rd1 = req.getRequestDispatcher("Home.jsp");
						rd1.forward(req, resp);
					}
					
					
				} else if (status.equals("failure")) {
					req.setAttribute("status", "Login failed");
					RequestDispatcher rd1 = req.getRequestDispatcher("Login.jsp");
					rd1.forward(req, resp);
				}
			}
			
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession se = request.getSession();
		if (request.getParameter("logout") != null) {
			se.invalidate();
			RequestDispatcher rd1 = request.getRequestDispatcher("Home.jsp");
			rd1.forward(request, response);
		}
	}
}
