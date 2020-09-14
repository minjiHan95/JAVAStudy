package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class userInfo
 */
@WebServlet("/userInfo")
public class userInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String m_id = request.getParameter("m_name");
		String m_pass = request.getParameter("m_pass");
		
		
		Cookie[] cookies = request.getCookies();

		// 회원의 아이디를 저장하기 위한 쿠키를 임시로 저장한다.
		Cookie userInfo = null;

		PrintWriter pw = response.getWriter();

		for (Cookie c : cookies) {
			pw.print(c.getName() + "\n");
			pw.print(c.getValue() + "\n");

			if (c.getName().equals("memberID")) {
				userInfo = c;
			}
		}
		if(userInfo==null) {
			userInfo = new Cookie("memberID", m_id);
		}

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
