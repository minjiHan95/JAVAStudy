package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/LoginCon")
public class LoginCon extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		String mID = request.getParameter("mID");
//		String mPW = request.getParameter("mPW");
//		
//		Cookie cookie = new Cookie("memberID", mID);
//		response.addCookie(cookie);
//		cookie.setMaxAge(60*60);
//		response.sendRedirect("loginOk.jsp");
		
		String mID = request.getParameter("mID");
		String mPW = request.getParameter("mPW");
		
		HttpSession session = request.getSession();
		session.setAttribute("memberID", mID);
		response.sendRedirect("loginOk.jsp");
		
	
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
