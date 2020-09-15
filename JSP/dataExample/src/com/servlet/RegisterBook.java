package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bookDAO.BookDAO;
import com.bookDTO.BookDTO;

@WebServlet("/registerBook")
public class RegisterBook extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();

		BookDAO bookDao = new BookDAO();
		ArrayList<BookDTO> list = bookDao.select();

		for (int i = 0; i < list.size(); i++) {
			out.print("ID: " + list.get(i).getBookId()+"<br>");
			out.print("NAME: " + list.get(i).getBookName()+"<br>");
			out.print("LOC: " + list.get(i).getBookLoc()+"<br>");
		}

//		String bookNAME = request.getParameter("bookNAME");
//		String bookLOC = request.getParameter("bookLOC");
//
//		String driver = "oracle.jdbc.driver.OracleDriver";
//		String url = "jdbc:oracle:thin:@localhost:1521:xe";
//		String id = "scott";
//		String pw = "tiger";
//
//		Connection con = null;
//		Statement stmt = null;
//
//		try {
//			Class.forName(driver);
//
//			con = DriverManager.getConnection(url, id, pw);
//			stmt = con.createStatement();
//			String sql = "INSERT INTO book(book_id, book_name, book_loc)";
//			sql += "VALUES (book_seq.nextval, '";
//			sql += bookNAME + "', '";
//			sql += bookLOC + "')";
//
//			int result = stmt.executeUpdate(sql);
//
//			if (result == 1) {
//				out.print("성공적으로 입력되었니다.");
//			} else {
//				out.print("입력에 실패했습니다.");
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		} finally {
//			try {
//				if(con!=null) con.close();
//				if(stmt!=null) stmt.close();
//			} catch (Exception e2) {
//				e2.printStackTrace();
//			}
//		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
