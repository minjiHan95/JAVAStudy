package com.bookDAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import com.bookDTO.BookDTO;

public class BookDAO {

	String driver = "oracle.jdbc.driver.OracleDriver";
	String url = "jdbc:oracle:thin:@localhost:1521:xe";
	String id = "scott";
	String pw = "tiger";

	public BookDAO() {
		// 생성자에서 드라이버 연결의 작업을 한다..
		try {
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// 모든 책의 정보를 보여주는 함수
	public ArrayList<BookDTO> select() {
		ArrayList<BookDTO> bookList = new ArrayList<>();

		Connection con = null;
		PreparedStatement stmt = null;
		ResultSet rs = null;

		try {
			con = DriverManager.getConnection(url, id, pw);
			String sql = "SELECT * FROM book ORDER BY BOOK_ID DESC";
			stmt = con.prepareStatement(sql);
			rs = stmt.executeQuery();

			while (rs.next()) {
				int bookId = rs.getInt("book_id");
				String bookName = rs.getString("book_name");
				String bookLoc = rs.getString("book_loc");

				BookDTO list = new BookDTO(bookId, bookName, bookLoc);
				bookList.add(list);
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (con != null)
					con.close();
				if (stmt != null)
					stmt.close();
				if (rs != null)
					rs.close();
			} catch (Exception e2) {
				// TODO: handle exception
			}
		}
		return bookList;
	}

}
